from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from telethon import TelegramClient
from telethon.sessions import StringSession

app = FastAPI()

# Telegram('session_name', 26527851, "3487105350b815cd247ba22f6976d764")

class RequestBody(BaseModel):
    hash: str
    id: int

@app.post("/")
async def your_route(request_body: RequestBody):
    hash_value = request_body.hash
    id_value = request_body.id
    return {"status": "ok"}

async def get_code():
    code = input('введите код:')
    return code

@app.get('/sign-in')
async def sign_in():
    phone_number = "+79516835376"
    session_name = 'vladimir'
    api_id = 15018163
    api_hash = "2adaf42efde89588dbc03473f44d63bd"
    
    with TelegramClient(session_name, api_id, api_hash) as client:
        await client.start(phone=phone_number, code_callback=get_code)

@app.get("/client")
async def client():
    phone_number = "+79516835376"
    client = TelegramClient('vladimir', 26527851, "3487105350b815cd247ba22f6976d764")
    await client.start(phone=phone_number)
    print(await client.get_me())
    output = ""
    return {"data": output}


@app.get("/chats")
async def chat():
    data = await 1
    return {"data": data}

