from telethon import TelegramClient
import asyncio


class TG:
    def __init__(self, name: str, number: int, api_id: int, api_hash: str):
        self.name = name
        self.number = number
        self.api_id = api_id
        self.api_hash = api_hash
        self.client = TelegramClient(
            session=self.name,
            api_id=self.api_id,
            api_hash=self.api_hash,
            system_version="4.16.30-vxCUSTOM",
            app_version=1,
            device_model="Asus"
        )

    async def connect(self, code):
        await self.client.start(self.number, code_callback=code)

    async def get_user(self):
        me = await self.client.get_me()
        return me


