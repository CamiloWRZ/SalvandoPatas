from sqlalchemy import Column, Integer, String, DateTime, Text
from core.database import Base

class PetORM(Base):
    __tablename__ = "pets"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    species = Column(String, index=True, nullable=False)
    breed = Column(String, nullable=True)
    age = Column(Integer, nullable=True)
    description = Column(Text, nullable=True)
    rescued_at = Column(DateTime, nullable=False)
