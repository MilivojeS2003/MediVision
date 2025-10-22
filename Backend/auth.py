from datetime import timedelta, datetime
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from starlette import status
from database import SessionLocal
from models import Users,Roles
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError


router = APIRouter(
    prefix = '/auth',
    tags = ['auth']
)

SECRET_KEY = "6a7c3fdbb9b74a8a02b3f62d3db72b25a1e0c8f6f19dc3a5f33b9ff612c5a07d"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

bcrypt_context = CryptContext(schemes = ['bcrypt_sha256'], deprecated = 'auto')

oauth_bearer = OAuth2PasswordBearer(tokenUrl = 'auth/token')

class CreateUserRequest(BaseModel):
    username:str
    password:str
    email:str
    role:str

class Token(BaseModel):
    access_token:str
    token_type:str

def get_db():
    db: Session = SessionLocal() 
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

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


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], 
                                 db: db_dependency):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    token = create_access_token(user.username, user.id, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": token, "token_type": "bearer"}


def authenticate_user(username: str, password: str, db):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

def create_access_token(username:str,user_id:int,expires_delta:timedelta):
    encode = {'sub':username, 'id':user_id}
    expires = datetime.now() + expires_delta
    encode.update({'exp':expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_user(token: Annotated[str, Depends(oauth_bearer)]): #token je string koji zavisi od oauth_bearer
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print(f'OVO JE PAYLOAD: {payload}')
        username:str = payload['sub']
        user_id:str = payload['id']
        #role:str = payload['role']
        if username is None or user_id is None:
            raise HTTPException(status_code=401, details='Could not validate user')
        return {'username':username, 'user_id':user_id}
    except JWTError:
        raise HTTPException(status_code=401, details='Could not validate user')