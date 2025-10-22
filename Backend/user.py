from fastapi import APIRouter, Depends, HTTPException
from starlette import status
from models import Users,Roles
from database import db_dependency
from pydantic import BaseModel
from passlib.context import CryptContext


router = APIRouter(
    prefix = '/user',
    tags = ['user']
)

bcrypt_context = CryptContext(schemes = ['bcrypt_sha256'], deprecated = 'auto')

class CreateUserRequest(BaseModel):
    username:str
    password:str
    email:str
    role:str

@router.post('/' , status_code= status.HTTP_201_CREATED)
def create_user(db: db_dependency, create_user_request:CreateUserRequest):
    roles = db.query(Roles).all()
    roles = [r.role for r in roles]
    print(f'OVO SU SVE ROLE: {roles}')
    if create_user_request.role not in roles:
        raise HTTPException(status_code=401, detail="Invalid role")
    
    create_user_model = Users(username = create_user_request.username,email = create_user_request.email, role = create_user_request.role, hashed_password = bcrypt_context.hash(create_user_request.password))
    db.add(create_user_model)
    db.commit()