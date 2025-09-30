from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os



app = FastAPI()

# abspath -> uzima putanju main.py, dirname sa putanje skida fajl, jos jedan dirname sa putanje skida Backend folde i dobijamo: C:\Users\KORISNIK\Desktop\MediVision AI
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "Frontend", "templates"))
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "Frontend", "static")), name="static")
print(f'OVO JE RUTA:{templates}')

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/login", response_class=HTMLResponse)
async def login(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})