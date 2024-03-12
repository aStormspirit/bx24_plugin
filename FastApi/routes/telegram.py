from utils import get_chats, get_me, get_messages, get_client
from fastapi import APIRouter, HTTPException, Request
import asyncio
from db.model import User
from telethon import TelegramClient

router = APIRouter(tags=['telegram'], prefix='/telegram')


@router.post("/start")
async def start(user: User):
    client = TelegramClient(user.name, user.api_id, user.api_hash)
    try:
        await client.start(phone=user.number)
    except Exception as e:
        print(e)
    finally:
        return 'ok'

@router.post("/me")
async def get_user(user: User):
    try:
        client = get_client(user)
        data = await get_me(client=client)
        return {"data": data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="User not found")

@router.post("/dialogs")
async def get_dialogs(user: User):
    try:
        client = get_client(user)
        dialogs = await get_chats(client=client)
        filtered_data = list(filter(lambda d: d['chat_name'] != "", dialogs))
        return {"data": filtered_data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="dialogs not found")

@router.post("/dialog/{chat_id}")
async def get_dialogs(user: User, chat_id: int):
    try:
        client = get_client(user)
        messages = await get_messages(client=client, chat_id=chat_id)
        return {"data": messages}
    except Exception as error:
        print(error)
        raise HTTPException(status_code=404, detail="dialogs not found")
    