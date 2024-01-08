from telethon import TelegramClient, sync

class Telegram():
    def __init__(self, api_id, api_hash, name):
        self.api_id = api_id
        self.api_hash = api_hash
        self.name = name
        self.client = TelegramClient(name, api_id, api_hash)

    async def get_client(self):
        await self.client.start()
        return (await self.client.get_me())
    
    async def chats(self):
        await self.client.start()
        chats = []
        async for dialog in self.client.iter_dialogs():
            chats.append(dialog.title)
        return chats
