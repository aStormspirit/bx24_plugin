import pymongo
import os

host = os.environ.get('MONGO_HOST', "localhost")

MONGO_URL = f"mongodb://{host}:27017"

client = pymongo.MongoClient(MONGO_URL)
database = client.users
user_collection = database["user_collection"]