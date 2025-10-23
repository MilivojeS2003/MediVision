from fastapi import APIRouter, Depends, HTTPException, UploadFile
from starlette import status
from models import Users,Roles,Products
from database import db_dependency
from pydantic import BaseModel
from passlib.context import CryptContext
from auth import get_current_user
#import magic
from uuid import uuid4


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

@router.post('', status_code = status.HTTP_201_CREATED)
def create_user(db: db_dependency, create_product_request:CreateProductRequest, current_user = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="Invalid Authorized")
    print(f'OVO JE USER: {current_user}')
    id =  current_user['user_id']
    print(f'OVO JE ID: {id}')
    create_product_model = Products(user_id = id,
                                title = create_product_request.title,
                                description = create_product_request.description,
                                canonical_sku = create_product_request.canonical_sku
                                )
    db.add(create_product_model)
    db.commit()

# @router.post('/uploud')
# async def uploud(file: UploadFile):
#     if not file:
#         raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="FILE NOT FOUND")
    
#     content = await file.read()
#     size = len(content) 

#     if not 0 < size <= 1*MB:
#         raise HTTPException(status.HTTP_400_BAD_REQUEST, detail="SUPPORTED FILE SIZE IS 0->1MB")
    
#     file_type = magic.from_buffer(buffer=content, mime=True)
#     if file_type not in SUPPORTED_FILE_TYPES:
#         raise HTTPException(status.HTTP_400_BAD_REQUEST, detail=f"Unsupported file type: {file_type}. Supported types are {SUPPORTED_FILE_TYPES}")
    
#     await s3_upload(contents=content, key=f'{uuid4()}.{SUPPORTED_FILE_TYPES[file_type]}')
#     return 'FILE FOUND'

