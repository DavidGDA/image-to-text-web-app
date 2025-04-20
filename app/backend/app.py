from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pytesseract
from PIL import Image
import io
import dotenv
import os

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

if ENVIRONMENT == "production":
    pytesseract.pytesseract.tesseract_cmd = os.environ.get("TESSERACT_EXE_PATH")
else:
    dotenv.load_dotenv()
    pytesseract.pytesseract.tesseract_cmd = os.environ.get("TESSERACT_EXE_PATH")

if ENVIRONMENT == "production":
    allowed_origins = ["https://image-to-text-p5w2.onrender.com"]
else:
    allowed_origins = [
        "http://localhost:10000",
        "http://127.0.0.1:10000",
    ]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["*"],
)


@app.post("/ocr/")
async def extract_text(file: UploadFile):
    if not file:
        return JSONResponse(
            content={"content": "No se seleccionó un archivo de imagen"},
            status_code=400,
        )
    if not file.filename.endswith((".png", ".jpg", ".jpeg")):
        return JSONResponse(
            content={"content": "El tipo de archivo no es admitido"}, status_code=400
        )

    contents = await file.read()
    image = Image.open(io.BytesIO(contents))
    text: str = pytesseract.image_to_string(image, lang="spa")
    text = text.replace("\f", " ")
    return JSONResponse(content={"text": text})
