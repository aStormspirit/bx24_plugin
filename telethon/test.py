from telethon import TelegramClient, sync

# Вставляем api_id и api_hash
api_id = 26527851 
api_hash = '3487105350b815cd247ba22f6976d764'

client = TelegramClient('session_name', api_id, api_hash)
client.start()

for dialog in client.iter_dialogs():
    print(dialog.entity.id)

# for message in client.iter_messages(453101970, limit=10):
#     print(message.message)