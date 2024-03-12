import asyncio
from telethon import TelegramClient
from telethon.tl.types import Message

client = TelegramClient('vova', 26527851, "3487105350b815cd247ba22f6976d764")
client.start()