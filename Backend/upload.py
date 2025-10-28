from fastapi import APIRouter, Request, Form, UploadFile, File
from fastapi.responses import HTMLResponse
from core import templates  
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime, timezone
import os
from pydantic import BaseModel
from typing import List, Optional



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
    docs = supabase.storage.from_(SUPABASE_BUCKET).list()
    documents = []
    for d in docs:
        public_url = supabase.storage.from_(SUPABASE_BUCKET).get_public_url(d["name"])
        documents.append({
            "id": d["id"] if "id" in d else d["name"],
            "name": d["name"],
            "url": public_url
        })
    return templates.TemplateResponse("home.html", {"request": request, "documents": documents})

@router.get("/uploadDoc", response_class=HTMLResponse)
async def upload_page(request: Request):
    return templates.TemplateResponse("uploadImages.html", {"request": request})

@router.get('/documents/{document_name}')
async def get_document(document_name:str,request: Request):
    #doc_url = supabase.storage.from_(SUPABASE_BUCKET).get_public_url(doc_name)
    document_url =  supabase.storage.from_(SUPABASE_BUCKET).get_public_url(document_name)

    if not document_url:
        return {'error': 'document is not found'}
    return {'url_document':{f'{document_url}'}}

@router.post("/postData")
async def upload_document(
    product_name: str = Form(...),
    product_color: Optional[str] = Form(None),
    product_size: Optional[str] = Form(None),
    product_description: Optional[str] = Form(None),
    product_images: Optional[List[UploadFile]] = File(None)
):
    # product_images će biti lista UploadFile ili None
    result_files = []

    if product_images:
        for upload in product_images:
            # upload.filename, upload.content_type i await upload.read()
            contents = await upload.read()      # bytes
            size = len(contents)
            result_files.append({
                "filename": upload.filename,
                "content_type": upload.content_type,
                "size": size
            })
            # Ovde možeš: sačuvati na disk, poslati u Supabase, obraditi itd.
            # npr. sačuvaj lokalno:
            # with open(f"/tmp/{upload.filename}", "wb") as f:
            #     f.write(contents)

    # vratimo info radi potvrde
    return {
        "ok": True,
        "product_name": product_name,
        "product_color": product_color,
        "product_size": product_size,
        "product_description": product_description,
        "files": result_files
    }

