from fastapi import APIRouter, WebSocket, WebSocketDisconnect, status, WebSocketException
from telethon import TelegramClient
from db.model import User
from tcm import TelegramClientManager

router = APIRouter()
tc_manager = TelegramClientManager(None)


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

def update_config(config):
    global tc_manager
    tc_manager = TelegramClientManager(config)
    
@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    try:
        await websocket.accept()
        data = await websocket.receive_json()
        config = User(**data)
        update_config(config)
        await websocket.send_text("Успешно")
        await websocket.close()
    except WebSocketDisconnect:
        raise WebSocketException(status_code=status.HTTP_404_NOT_FOUND)


    # try:                
    #     # Принимаем JSON объект от клиента
    #     config_raw = await websocket.receive_text()
    #     config_data = json.loads(config_raw)

    #     # Создаем экземпляр объекта TGConfig из JSON данных
    #     config = User(**config_data)

    #     async def code():
    #        code = await websocket.receive_text()
    #        return code
        
    #     #1 Регистрация клиента если файла сессии нету -> Создаем экземпляр класса -> Получаем код -> создаем клиента
    #     #2 Регистрация клиента с файлом сессии -> Создаем экземпляр класса
        
    #     global client
    #     if client is None:
    #         client = TelegramClient(config.name, config.api_id, config.api_hash)
    #     else:
    #         client.name = config.name
    #         client.number = config.number
    #         client.api_id = config.api_id
    #         client.api_hash = config.api_hash

    #     #отправка сообщения об успешной регистрации сессии
    #     await websocket.send_text("Успешно")
        
    # except WebSocketDisconnect:
    #     pass

    # finally:
    #     await websocket.close()

