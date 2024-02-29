from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from db.model import User
from db.connect import user_collection
from db.shemas import list_serial
import json
from telethon import TelegramClient
from telegram import TG
import asyncio

router = APIRouter()

client = None

@router.get("/users/", tags=["users"])
async def read_users():
    # get all data from mongodb
    users_cursor = user_collection.find()    
    # convert to dict
    users = list_serial(users_cursor)
    
    return {"data": users}

@router.get("/users/{user_id}", tags=["users"])
async def read_user(user_id: int):
    #get date from mongodb
    user = user_collection.find_one({"id": user_id})
    
    #convert to dict
    user = user.model_dump()
    
    return user
    

#post
@router.post("/users/", tags=["users"])
async def put_users(user: User):
    user_collection.insert_one(user.model_dump())
    return {"data": user}

#user chat
@router.get("/telegram/me", tags=["telegram"])
async def get_user():
    await client.connect()
    user = await client.get_me()
    user_json = user.to_json()
    await client.disconnect()
    return {"data": user_json}

@router.get("/telegram/dialogs", tags=["telegram"])
async def get_user():
    await client.connect()
    dialogs = await client.get_dialogs()
    print(dialogs)
    await client.disconnect()
    return {"data": '1'}


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:                
        # Принимаем JSON объект от клиента
        config_raw = await websocket.receive_text()
        config_data = json.loads(config_raw)

        # Создаем экземпляр объекта TGConfig из JSON данных
        config = User(**config_data)

        async def code():
           code = await websocket.receive_text()
           return code
        
        #1 Регистрация клиента если файла сессии нету -> Создаем экземпляр класса -> Получаем код -> создаем клиента
        #2 Регистрация клиента с файлом сессии -> Создаем экземпляр класса
        
        global client
        if client is None:
            client = TelegramClient(config.name, config.api_id, config.api_hash)
        else:
            client.name = config.name
            client.number = config.number
            client.api_id = config.api_id
            client.api_hash = config.api_hash

        #отправка сообщения об успешной регистрации сессии
        await websocket.send_text("Успешно")
        
    except WebSocketDisconnect:
        pass

    finally:
        await websocket.close()

