from fastapi import APIRouter, Depends, HTTPException, UploadFile, Form, File,Request
from models import Users,Roles,Products
from database import db_dependency
from pydantic import BaseModel
from typing import List, Optional
from core import templates  
from fastapi.responses import HTMLResponse




router = APIRouter(
    prefix = '/product',
    tags = ['product']
)

KB = 1024
MB = 1024 * KB

SUPPORTED_FILE_TYPES= {
    'image/png':'png',
    'image/jpeg':'jpeg',
    'application/pdf': 'pdf'
}

def s3_upload():
    pass

class CreateProductRequest(BaseModel):
    title:str
    description:str
    canonical_sku:str

@router.get("/", response_class=HTMLResponse)
async def upload_page(request: Request):
    return templates.TemplateResponse("uploadImages.html", {"request": request})



@router.post("/create")
async def upload_document(
    db: db_dependency,
    product_name: str = Form(...),
    product_color: Optional[str] = Form(None),
    product_size: Optional[str] = Form(None),
    product_description: Optional[str] = Form(None),
    product_images: Optional[List[UploadFile]] = File(None),
    product_price: str = Form(...),
    product_currency: str = Form(...),
    prompt: str = Form(...),
    
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

    #upis u bazu
    create_product_model = Products(user_id = 1,
                        name = product_name,
                        description = product_description,
                        size = product_size,
                        color = product_color,
                        price = product_price,
                        curreny = product_currency,      
                        )
    db.add(create_product_model)
    db.commit()
    # vratimo info radi potvrde 
    return {
        "ok": True,
        "product_name": product_name,
        "product_color": product_color,
        "product_size": product_size,
        "product_description": product_description,
        "files": result_files,
        "product_price":product_price,
        "product_currency":product_currency,
        "prompt":prompt
    }