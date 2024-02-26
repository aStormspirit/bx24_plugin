from fastapi import APIRouter, WebSocket
from db.model import User
from db.connect import user_collection
from db.shemas import list_serial
import json

router = APIRouter()

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


# @router.websocket("/ws")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket.accept()
#     while True:
#         data = await websocket.receive_text()
#         await websocket.send_text(f"Message text was: {data}")