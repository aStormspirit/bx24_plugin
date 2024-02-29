import asyncio
from telethon import TelegramClient

client = TelegramClient('vova', 26527851, "3487105350b815cd247ba22f6976d764")


async def main():
    await client.start()
    async for dialog in client.iter_dialogs(limit=10):
        print(dialog.name, 'has ID', dialog.id)


with client:
    client.loop.run_until_complete(main())