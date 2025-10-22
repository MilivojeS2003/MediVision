from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
import models
from database import engine,SessionLocal
from sqlalchemy.orm import Session
import auth
from auth import get_current_user

app = FastAPI()
app.include_router(auth.router)
models.Base.metadata.create_all(bind=engine)

class ChoiceBase(BaseModel):
    choice_text: str
    is_correct:bool

class QuestionBase(BaseModel):
    question_text:str
    choices: List[ChoiceBase]

def get_db():
    db: Session = SessionLocal() 
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]

@app.get("/")
def user(user:user_dependency, db:db_dependency):
    if user is None:
        raise HTTPException(status_code=401, details='Not Autharization')
    return {"user":user}


@app.post("/question/")
def create_question(question: QuestionBase, db:db_dependency):
    db_question = models.Questions(question_text = question.question_text)
    db.add(db_question)
    db.commit()
    db.flush()

    for choice in question.choices:
        db_choice = models.Choices(choice_text = choice.choice_text, is_correct = choice.is_correct, question_id = db_question.id)
        db.add(db_choice)
    db.commit()
    db.refresh(db_question)
    return {"message": "Question created successfully", "question_id": db_question.id}

@app.get("/question/{question_id}")
def read_question(question_id:int, db:db_dependency):
    result = db.query(models.Questions).filter(models.Questions.id == question_id).first()
    if not result:
        raise HTTPException(status_code=404, details='Question is not found')
    return result

@app.get("/question/")
def read_all_question(db:db_dependency):
    result = db.query(models.Questions).all()
    if not result:
        raise HTTPException(status_code=404, details='Question is not found')
    return result