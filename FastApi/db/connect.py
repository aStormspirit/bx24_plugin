import pymongo

MONGO_URL = "mongodb://mongo:27017"

client = pymongo.MongoClient(MONGO_URL)
database = client.users
user_collection = database["user_collection"]