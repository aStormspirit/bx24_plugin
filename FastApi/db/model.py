from typing import Optional
from pydantic import BaseModel

class UserTG(BaseModel):
    name: str
    number: str
    api_id: str
    api_hash: str

class UserSchema(BaseModel):
    login: str
    password: bytes

class OffsetSchema(BaseModel):
    offset: int

class Message(BaseModel):
    message: str