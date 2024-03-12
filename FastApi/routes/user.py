from fastapi import APIRouter, status
from db.connect import user_collection
from db.shemas import list_serial
from db.model import User

router = APIRouter(tags=["users"], prefix="/users")

@router.get("/")
async def read_users():
    # get all data from mongodb
    users_cursor = user_collection.find()    
    # convert to dict
    users = list_serial(users_cursor)
    
    return {"data": users}

@router.get("/{user_id}")
async def read_user(user_id: int):
    #get date from mongodb
    user = user_collection.find_one({"id": user_id})
    
    #convert to dict
    user = user.model_dump()
    
    return user
    

@router.post("/",status_code=status.HTTP_201_CREATED)
async def put_users(user: User):
    user_collection.insert_one(user.model_dump())
    return {"data": user}