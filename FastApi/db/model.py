from pydantic import BaseModel

class User(BaseModel):
    name: str
    number: str
    api_id: str
    api_hash: str

