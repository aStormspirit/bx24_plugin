from fastapi import FastAPI
from telegram import Telegram
from pydantic import BaseModel
import asyncio
from prompt_toolkit import prompt

app = FastAPI()

class Profile:
    def __init__(self):
        self.profile = None

    def get_profile(self):
        return self.profile

    def add_profile(self, new_profile):
        self.profile = new_profile


tg = Profile()

class RequestBody(BaseModel):
    hash: str
    id: int

@app.post("/")
async def your_route(request_body: RequestBody):
    hash_value = request_body.hash
    id_value = request_body.id
    tg.add_profile(Telegram(26527851, '3487105350b815cd247ba22f6976d764', 'session_name'))
    return {"status": "ok"}


async def enter_phone_number(phone_number):
    client = await tg.get_profile().get_client()
    await asyncio.sleep(3)  # Добавляем небольшую задержку для переключения окна на программу
    prompt("Please enter your phone (or bot token): ", patch_stdout=True, bottom_toolbar=f"client: {client}").send_text(phone_number)
    await asyncio.sleep(1)  # Добавляем задержку для обработки ответа программы
    return "client"

@app.get("/client")
async def client():
    phone_number = "+79516835376"
    output = await enter_phone_number(phone_number)
    return {"data": output}


@app.get("/chats")
async def chat():
    data = await tg.chats()
    return {"data": data}

