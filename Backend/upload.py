from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime, timezone
import os

load_dotenv()

router = APIRouter(
    prefix='/upload',
    tags=['upload']
)

# Templates
templates = Jinja2Templates(directory="templates")
templates.env.globals.update(now=lambda: datetime.now(timezone.utc))

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
    print(f'OVO JE DOCUMENT: {documents}')
    return templates.TemplateResponse("home.html", {"request": request, "documents": documents})

@router.get("/uploadDoc", response_class=HTMLResponse)
async def upload_page(request: Request):
    return templates.TemplateResponse("uploadImages.html", {"request": request})

@router.get('/document/{doc_name}')
async def get_document(doc_name:str):
    doc_url = supabase.storage.from_(SUPABASE_BUCKET).get_public_url(doc_name)
    return doc_url
