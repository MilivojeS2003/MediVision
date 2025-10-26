# core.py
from pathlib import Path
from fastapi.templating import Jinja2Templates
from datetime import datetime, timezone

BASE_DIR = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=BASE_DIR / "templates")
templates.env.globals.update(now=lambda: datetime.now(timezone.utc))
