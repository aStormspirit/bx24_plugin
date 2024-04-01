from core.utils import get_chats, get_me, get_messages, get_client
from fastapi import APIRouter, HTTPException
from db.model import UserTG
from telethon.tl.functions.messages import CreateChatRequest

router = APIRouter(tags=['telegram'], prefix='/telegram')


@router.post("/start")
async def start(user: UserTG):
    client = get_client(user)
    try:
        await client.start(phone=user.number)
    except Exception as e:
        print(e)
    finally:
        return 'ok'

@router.post("/me")
async def get_user(user: UserTG):
    try:
        client = get_client(user)
        data = await get_me(client=client)
        return {"data": data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="User not found")

@router.post("/dialogs")
async def get_dialogs(user: UserTG):
    try:
        client = get_client(user)
        dialogs = await get_chats(client=client)
        filtered_data = list(filter(lambda d: d['chat_name'] != "", dialogs))
        return {"data": filtered_data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="dialogs not found")

@router.post("/dialog/{chat_id}")
async def get_dialogs(user: UserTG, chat_id: int):
    try:
        client = get_client(user)
        messages = await get_messages(client=client, chat_id=chat_id)
        return {"data": messages}
    except Exception as error:
        print(error)
        raise HTTPException(status_code=404, detail="dialogs not found")
    
@router.post("/create_chat")
async def create_chat_with_vendor(user: UserTG):
    try:
        client = get_client(user)
        async with client:
            result = await client(CreateChatRequest(users=["@kubaturaAdmin", "@Kubatura_Bot"], title='Декор Колор'))
            chat_id = result.chats[0].id
            await client.send_message(chat_id, f'-{chat_id} Здравствуйте, это группа куда бот будет присылать информацию о заказах с маркетплейса Кубатура.ру')
        return {"data": result}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="dialogs not found")