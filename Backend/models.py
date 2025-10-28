from sqlalchemy import Column, Integer, String, ForeignKey,Boolean, DateTime
from database import Base
from datetime import datetime


class Questions(Base):
    __tablename__ = 'questions'

    id = Column(Integer, primary_key = True, index = True)
    question_text = Column(String, index=True)

class Choices(Base):
    __tablename__ = 'choices'

    id = Column(Integer, primary_key = True, index = True)
    choice_text = Column(String, index=True)
    is_correct = Column(Boolean, default=False)
    question_id = Column(Integer, ForeignKey("questions.id"))

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key = True, index = True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)
    role = Column()
    hashed_password = Column(String)
    created_at = Column(DateTime, default=datetime.now)

class Roles(Base):
    __tablename__ = 'roles'

    id = Column(Integer, primary_key = True, index = True)
    role = Column(String,unique=True)


class Products(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key = True, index = True)
    user_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String)
    size = Column(String)
    description = Column(String)
    color = Column(String)
    created_at = Column(DateTime, default=datetime.now)
    status = Column(String, default="Active")
    price = Column(String)
    curreny = Column(String)
    stockQuality = Column(Integer, default = 1)



