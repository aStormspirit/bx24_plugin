def user_serial(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "number": user["number"],
        "api_id": user["api_id"],
        "api_hash": user["api_hash"],
    }

def list_serial(users) -> list:
    return [user_serial(user) for user in users]