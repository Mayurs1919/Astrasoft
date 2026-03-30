

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from fastapi import FastAPI, Request, status, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import Optional
import shutil
import tempfile
from db_utils import insert_applicant

load_dotenv()

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email config (use environment variables in production)
EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", 587))
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "harshmayur1704@gmail.com")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "your-app-password")  # Use App Password for Gmail
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER", "harshmayur1704@gmail.com")

ALLOWED_EXTENSIONS = {"pdf", "doc", "docx"}
def allowed_file(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# --- Job Application Endpoint ---
# @app.post("/api/apply")
# async def apply(
#     name: str = Form(...),
#     email: EmailStr = Form(...),
#     phone: Optional[str] = Form(None),
#     position: str = Form(...),
#     resume: UploadFile = File(...)
# ):
#     if not allowed_file(resume.filename):
#         return JSONResponse(status_code=400, content={"success": False, "message": "Invalid file type. Only PDF, DOC, DOCX allowed."})


#     # Save file to a temp location
#     with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(resume.filename)[1]) as tmp:
#         shutil.copyfileobj(resume.file, tmp)
#         tmp_path = tmp.name
#     resume_filename = resume.filename

#     # Store applicant data in DB
#     db_result = insert_applicant(name, email, phone, position, resume_filename)
#     if not db_result:
#         if os.path.exists(tmp_path):
#             os.remove(tmp_path)
#         return JSONResponse(status_code=500, content={"success": False, "message": "Failed to store applicant data in database."})

#     # Compose email
#     msg = MIMEMultipart()
#     msg["From"] = EMAIL_HOST_USER
#     msg["To"] = EMAIL_RECEIVER
#     msg["Subject"] = f"New Job Application: {name} for {position}"
#     body = f"Name: {name}\nEmail: {email}\nPhone: {phone or '-'}\nPosition: {position}\n\nResume attached."
#     msg.attach(MIMEText(body, "plain"))

#     # Attach resume
#     with open(tmp_path, "rb") as f:
#         part = MIMEText(f.read(), "base64", "utf-8")
#         part.add_header('Content-Disposition', f'attachment; filename="{resume.filename}"')
#         part.add_header('Content-Type', resume.content_type)
#         msg.attach(part)

#     # Send email
#     try:
#         with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
#             server.starttls()
#             server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
#             server.sendmail(EMAIL_HOST_USER, EMAIL_RECEIVER, msg.as_string())
#         os.remove(tmp_path)
#         return {"success": True, "message": "Application submitted successfully."}
#     except Exception as e:
#         if os.path.exists(tmp_path):
#             os.remove(tmp_path)
#         return JSONResponse(status_code=500, content={"success": False, "message": str(e)})

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Email config (use environment variables in production)
EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", 587))
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "harshmayur1704@gmail.com")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "your-app-password")  # Use App Password for Gmail
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER", "harshmayur1704@gmail.com")

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/api/contact")
async def contact(form: ContactForm):
    try:
        # Compose email
        msg = MIMEMultipart()
        msg["From"] = EMAIL_HOST_USER
        print(f"DEBUG: EMAIL_HOST_USER={EMAIL_HOST_USER}")
        print(f"DEBUG: EMAIL_RECEIVER={EMAIL_RECEIVER}")    
        msg["To"] = EMAIL_RECEIVER

        msg["Subject"] = f"New Contact Form Submission from {form.name}"
        body = f"Name: {form.name}\nEmail: {form.email}\n\nMessage:\n{form.message}"
        msg.attach(MIMEText(body, "plain"))

        # Send email
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            print("DEBUG: Logged in to email server successfully.")
            server.sendmail(EMAIL_HOST_USER, EMAIL_RECEIVER, msg.as_string())

        return {"success": True, "message": "Message sent successfully."}
    except Exception as e:
        print(f"DEBUG: Error occurred while sending email: {e}")    
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content={"success": False, "message": str(e)})

@app.post("/api/apply")
async def apply(
    name: str = Form(...),
    email: EmailStr = Form(...),
    phone: Optional[str] = Form(None),
    position: str = Form(...),
    resume: UploadFile = File(...)
):
    if not allowed_file(resume.filename):
        return JSONResponse(status_code=400, content={"success": False, "message": "Invalid file type. Only PDF, DOC, DOCX allowed."})


    # Save file to a temp location
    with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(resume.filename)[1]) as tmp:
        shutil.copyfileobj(resume.file, tmp)
        tmp_path = tmp.name
    resume_filename = resume.filename

    # Store applicant data in DB
    db_result = insert_applicant(name, email, phone, position, resume_filename)
    if not db_result:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        return JSONResponse(status_code=500, content={"success": False, "message": "Failed to store applicant data in database."})

    # Compose email
    msg = MIMEMultipart()
    msg["From"] = EMAIL_HOST_USER
    msg["To"] = EMAIL_RECEIVER
    msg["Subject"] = f"New Job Application: {name} for {position}"
    body = f"Name: {name}\nEmail: {email}\nPhone: {phone or '-'}\nPosition: {position}\n\nResume attached."
    msg.attach(MIMEText(body, "plain"))

    # Attach resume
    with open(tmp_path, "rb") as f:
        part = MIMEText(f.read(), "base64", "utf-8")
        part.add_header('Content-Disposition', f'attachment; filename="{resume.filename}"')
        part.add_header('Content-Type', resume.content_type)
        msg.attach(part)

    # Send email
    try:
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            server.sendmail(EMAIL_HOST_USER, EMAIL_RECEIVER, msg.as_string())
        os.remove(tmp_path)
        return {"success": True, "message": "Application submitted successfully."}
    except Exception as e:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        return JSONResponse(status_code=500, content={"success": False, "message": str(e)})
