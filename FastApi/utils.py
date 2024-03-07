import time
from functools import wraps
from telethon.tl.types import Message


def timing(f):
    @wraps(f)
    async def wrapper(*args, **kwargs):
        start = time.time()
        result = await f(*args, **kwargs)
        end = time.time()
        print(f'Функция выполнялась {end-start} секунд.')
        return result
    return wrapper

async def get_chats(client):
    data = []
    try:
        async with client:
            chats = client.iter_dialogs()
            async for chat in chats:
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
            user = await client.get_me()
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