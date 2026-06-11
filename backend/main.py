from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings

# Import routers once they are ready
from modules.adoptions.presentation.pet_router import router as adoptions_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set up CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(adoptions_router, prefix=f"{settings.API_V1_STR}/adoptions", tags=["Adoptions"])

@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "ok"}
