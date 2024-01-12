from telethon.sync import TelegramClient
from telethon.sessions import StringSession

with TelegramClient(StringSession(), 26527851, '3487105350b815cd247ba22f6976d764') as client:
    print(client.session.save())

    