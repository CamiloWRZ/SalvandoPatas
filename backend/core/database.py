from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import declarative_base
from core.config import settings

# Create async engine
engine = create_async_engine(settings.DATABASE_URL, echo=True, future=True)

# Create session maker
AsyncSessionLocal = async_sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)

# Declarative base for ORM models
Base = declarative_base()

# Dependency to yield database session
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session
