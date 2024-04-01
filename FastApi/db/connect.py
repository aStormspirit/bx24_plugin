import pymongo
from dotenv import dotenv_values

config = dotenv_values(".env")

MONGO_URL = f"mongodb://localhost:27017"

client = pymongo.MongoClient(MONGO_URL)
database = client.users
user_collection = database["user_collection"]