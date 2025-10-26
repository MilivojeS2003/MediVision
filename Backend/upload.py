from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from core import templates  # koristi core.py, nema circular importa
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime, timezone
import os

load_dotenv()

router = APIRouter(
    prefix='/upload',
    tags=['upload']
)

# Supabase
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')
SUPABASE_BUCKET = os.getenv('SUPABASE_BUCKET')

if not SUPABASE_URL or not SUPABASE_ANON_KEY:
    raise ValueError("SUPABASE_URL i SUPABASE_ANON_KEY moraju biti definisani u .env fajlu")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_ANON_KEY)

@router.get('/', response_class=HTMLResponse)
async def home(request: Request):
    documents = supabase.storage.from_(SUPABASE_BUCKET).list()
    return templates.TemplateResponse("home.html", {"request": request, "documents": documents})

@router.get("/uploadDoc", response_class=HTMLResponse)
async def upload_page(request: Request):
    return templates.TemplateResponse("uploadImages.html", {"request": request})

@router.get('/documents')
async def get_document(request: Request):
    #doc_url = supabase.storage.from_(SUPABASE_BUCKET).get_public_url(doc_name)
    return templates.TemplateResponse("document.html", {"request": request})

