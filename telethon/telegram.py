from telethon import TelegramClient, sync

class Telegram():
    def __init__(self, name: str, api_id: int, api_hash: str):
        self.name = name
        self.api_id = api_id
        self.api_hash = api_hash
        self.client = TelegramClient(name, api_id, api_hash)

    async def get_client(self):
        return (self.client)
    
    async def chats(self):
        await self.client.start()
        chats = []
        async for dialog in self.client.iter_dialogs():
            chats.append(dialog.title)
        return chats
