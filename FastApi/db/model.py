from pydantic import BaseModel

class UserTG(BaseModel):
    name: str
    number: str
    api_id: str
    api_hash: str

class UserSchema(BaseModel):
    login: str
    password: bytes