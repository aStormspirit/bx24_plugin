import time
from functools import wraps
from telethon.tl.types import Message
import asyncio
from db.model import User
from telethon import TelegramClient
from db.connect import MONGO_URL
from mongoengine import connect
from telemongo import MongoSession

def timing(f):
    @wraps(f)
    async def wrapper(*args, **kwargs):
        start = time.time()
        result = await f(*args, **kwargs)
        end = time.time()
        print(f'Функция выполнялась {end-start} секунд.')
        return result
    return wrapper

def get_client(user: User):
    connect()
    session = MongoSession(host=MONGO_URL, database='telegram')
    if user:
        return TelegramClient(session=session, api_id=user.api_id, api_hash=user.api_hash)
    else:
        raise Exception("User is not valid")

async def get_chats(client):
    data = []
    try:
        async with client:
            async for chat in client.iter_dialogs():
                chat_obj = {
                    'chat_id': chat.id,
                    'chat_name': chat.name
                }
                data.append(chat_obj)
    except Exception as e:
        raise e
    
    return data


async def get_me(client):
    try:
        async with client:
            user = asyncio.create_task(client.get_me())
            user = await user
    except Exception as e:
        raise e
        
    return {
        'user_id': user.id,
        'user_name': user.first_name,
        'user_username': user.username
    }

async def get_messages(client, chat_id):
    data = []
    async with client:
        async for message in client.iter_messages(chat_id, limit=10, offset_id=0):
            if isinstance(message, Message) and message.media is None:

                me = False
                if message.from_id is not None: # если from_id не None
                    me = True
                
                message_obj = {
                    'message_id': message.id,
                    'message': message.message,
                    "me": me
                }
                data.append(message_obj)
    return data