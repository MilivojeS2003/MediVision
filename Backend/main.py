from fastapi import FastAPI, HTTPException, Depends
from fastapi.staticfiles import StaticFiles
from typing import Annotated
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI()

# PRVO montiraj static - na samom početku!
app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")

# ZATIM importuj module (neki od njih mogu koristiti templates)
import models
from database import engine, db_dependency
import auth
import user
import product
import upload
from auth import get_current_user

# Kreiraj tabele
models.Base.metadata.create_all(bind=engine)

# Registruj routere
app.include_router(auth.router)
app.include_router(user.router)
app.include_router(product.router)
app.include_router(upload.router)

# Debug: ispisi sve rute
print("\n--- Sve rute ---")
for r in app.routes:
    print(f"name: {getattr(r, 'name', None)}, path: {getattr(r, 'path', None)}")
print("--- Kraj ruta ---\n")

# Dependency
user_dependency = Annotated[dict, Depends(get_current_user)]

@app.get("/")
def user(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail='Not Authorized')
    return {"user": user}