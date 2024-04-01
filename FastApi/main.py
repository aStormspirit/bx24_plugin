from fastapi import FastAPI
from react import serve_react_app
from fastapi.middleware.cors import CORSMiddleware

from routes import ws, user, telegram, auth
# Создайте экземпляр FastAPI

app = FastAPI()

# Определите список разрешенных источников (origin), методов, заголовков и др.
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Referertelegram"],
)

path_to_react_app_build_dir = "./build"

app.include_router(ws.router)
app.include_router(telegram.router)
app.include_router(user.router)
app.include_router(auth.router)

app = serve_react_app(app, path_to_react_app_build_dir)
