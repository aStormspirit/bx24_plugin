from core.utils import get_chats, get_me, get_messages, get_client
from fastapi import APIRouter, HTTPException, Request
from db.model import UserTG, OffsetSchema, Message
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
async def get_user(request: Request):
    try:
        client = get_client(api_id=request.cookies['api_id'], api_hash=request.cookies['api_hash'])
        data = await get_me(client=client)
        return {"data": data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="User not found")

@router.post("/dialogs")
async def get_dialogs(request: Request):
    try:
        client = get_client(api_id=request.cookies['api_id'], api_hash=request.cookies['api_hash'])
        dialogs = await get_chats(client=client)
        filtered_data = list(filter(lambda d: d['chat_name'] != "", dialogs))
        return {"data": filtered_data}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="dialogs not found")

@router.post("/dialog/{chat_id}/")
async def get_dialogs(request: Request, chat_id: int, offset: OffsetSchema):
    try:
        client = get_client(api_id=request.cookies['api_id'], api_hash=request.cookies['api_hash'])
        messages = await get_messages(client=client, chat_id=chat_id, offset=offset.offset)
        return {"data": messages}
    except Exception as error:
        print(error)
        raise HTTPException(status_code=404, detail="dialogs not found")
    
@router.post("/create_chat")
async def create_chat_with_vendor(request: Request):
    try:
        client = get_client(api_id=request.cookies['api_id'], api_hash=request.cookies['api_hash'])
        async with client:
            result = await client(CreateChatRequest(users=["@kubaturaAdmin", "@Kubatura_Bot"], title='База диванов'))
            chat_id = result.chats[0].id
            await client.send_message(chat_id, f'-{chat_id} Здравствуйте, это группа куда бот будет присылать информацию о заказах с маркетплейса Кубатура.ру')
        return {"data": result}
    except Exception as error:
        print("An exception occurred: ", error)
        raise HTTPException(status_code=404, detail="dialogs not found")
    
@router.post("/send_message")
async def send_message(request: Request, chat_id: int, message: Message):
    print(message.message)
    try:
        client = get_client(api_id=request.cookies['api_id'], api_hash=request.cookies['api_hash'])
        async with client:
            await client.send_message(chat_id, message.message)

    except Exception as e:
        print(e)