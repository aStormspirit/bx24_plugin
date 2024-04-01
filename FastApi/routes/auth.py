from fastapi import APIRouter, status, Depends, HTTPException, Form
from pydantic import BaseModel
from db.model import UserSchema
import jwt_utils
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials


router = APIRouter(tags=["JWT"])

http_beater = HTTPBearer()

class TokenInfo(BaseModel):
    access_token: str
    token_type: str

admin = UserSchema(
    login="admin",
    password=jwt_utils.hash_password("admin"),
)

users_db: dict[str, UserSchema] = {
    admin.login: admin,
}

def validate_auth_user(
    login: str = Form(),
    password: str = Form(),
):
    unauthed_exc = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="invalid username or password",
    )

    if not (user := users_db.get(login)):
        raise unauthed_exc

    if not jwt_utils.validate_password(
        password=password,
        hashed_password=user.password,
    ):
        raise unauthed_exc

    # if not user.active:
    #     raise HTTPException(
    #         status_code=status.HTTP_403_FORBIDDEN,
    #         detail="user inactive",
    #     )

    return user

def get_payload(credentials: HTTPAuthorizationCredentials = Depends(http_beater)) -> UserSchema:
    token = credentials.credentials
    try:
        payload = jwt_utils.decode_jwt(token=token)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"token invalid ({e})",
        )

    return payload

def get_auth_user(payload: dict = Depends(get_payload)):
    username: str | None = payload.get("sub")
    if user := users_db.get(username):
        return user
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="token invalid (user not found)",
    )


@router.post("/login", status_code=status.HTTP_201_CREATED)
async def auth_user(user: UserSchema = Depends(validate_auth_user)):
    jwt_payload = {
        "sub": user.login,
        "login": user.login,
    }
    token = jwt_utils.encode_jwt(jwt_payload)
    return TokenInfo(access_token=token, token_type="Bearer")

@router.get("/check-auth", status_code=status.HTTP_200_OK)
async def check_auth_user(user: UserSchema = Depends(get_auth_user)):
    return {
        "login": user.login
    }