import asyncio
from telethon import TelegramClient
from telethon.tl.types import Message

client = TelegramClient('vova', 26527851, "3487105350b815cd247ba22f6976d764")

async def get_chats():
    data = []
    async with client:
        async for message in client.iter_messages(529795829, limit=10, offset_id=0):
            if isinstance(message, Message) and message.media is None:

                me = False
                if message.from_id is not None: # если from_id не None
                    me = True
                
                message_obj = {
                    'message_id': message.id,
                    'message': message.message,
                    "me": me
                }
                data.append(message_obj)
    return data


asyncio.run(get_chats())

