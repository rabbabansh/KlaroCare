from fastapi import FastAPI
from routes import careplan_api, chat_api


app = FastAPI(root_path="/api")

app.include_router(careplan_api.router)
app.include_router(chat_api.router)


@app.get("/health-check")
async def root():
    return {"message": "ok"}
