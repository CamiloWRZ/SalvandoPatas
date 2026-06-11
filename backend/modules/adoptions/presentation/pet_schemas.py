from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class PetCreate(BaseModel):
    name: str = Field(..., example="Firulais")
    species: str = Field(..., example="Dog")
    breed: Optional[str] = Field(None, example="Mixed")
    age: Optional[int] = Field(None, description="Age in months", example=24)
    description: Optional[str] = Field(None, example="Very friendly and playful.")

class PetResponse(BaseModel):
    id: int
    name: str
    species: str
    breed: Optional[str]
    age: Optional[int]
    description: Optional[str]
    rescued_at: datetime
    
    class Config:
        from_attributes = True
