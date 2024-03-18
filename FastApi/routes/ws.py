from fastapi import APIRouter, WebSocket, WebSocketDisconnect, status, WebSocketException
from telethon import TelegramClient
from db.model import User
from utils import get_client
import asyncio

router = APIRouter()


# class ConnectionManager:
#     def __init__(self):
#         self.active_connections: list[WebSocket] = []

#     async def connect(self, websocket: WebSocket):
#         await websocket.accept()
#         self.active_connections.append(websocket)

#     def disconnect(self, websocket: WebSocket):
#         self.active_connections.remove(websocket)

#     async def send_personal_message(self, message: str, websocket: WebSocket):
#         await websocket.send_text(message)

#     async def broadcast(self, message: str):
#         for connection in self.active_connections:
#             await connection.send_text(message)


# manager = ConnectionManager()

# def register_session(config: User):
#     global client
#     if client is None:
#         client = TelegramClient(config.name, config.api_id, config.api_hash)
#     else:
#         client.name = config.name
#         client.number = config.number
#         client.api_id = config.api_id
#         client.api_hash = config.api_hash

# def update_config(config):
#     global tc_manager
#     tc_manager = TelegramClientManager(config)
    
@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    try:
        await websocket.accept()
        # print('Подключился')
        data = await websocket.receive_json()
        config = User(**data)


        # print(data)

        async def code():
           code = await websocket.receive_text()
        #    print('2')
           return code
        
        try:
            client = get_client(config)
        except Exception as e:
            print(e)
            await websocket.send_json({'error': 'Invalid config'})
            await websocket.close()
            return
        
        await client.start(phone=config.number, code_callback=code)
        # print(await client.get_me())
        
    except RuntimeError as re:
        print(re)
        pass
    except WebSocketDisconnect as wsd:
        print(wsd)
        pass

    finally:
        try:
            await websocket.send_text("Успешно")
            await websocket.close()
        except RuntimeError:
            pass



    # try:                
    #     # Принимаем JSON объект от клиента
    #     config_raw = await websocket.receive_text()
    #     config_data = json.loads(config_raw)

    #     # Создаем экземпляр объекта TGConfig из JSON данных
    #     config = User(**config_data)

   

