from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import get_db
from modules.adoptions.domain.pet import Pet
from modules.adoptions.application.register_pet_use_case import RegisterPetUseCase
from modules.adoptions.infrastructure.pet_repository import PostgresPetRepository
from modules.adoptions.presentation.pet_schemas import PetCreate, PetResponse
from datetime import datetime

router = APIRouter()

# Dependency to inject the use case
def get_register_pet_use_case(session: AsyncSession = Depends(get_db)) -> RegisterPetUseCase:
    # We construct the infrastructure implementation and inject it into the use case
    repository = PostgresPetRepository(session)
    return RegisterPetUseCase(repository)

@router.post("/", response_model=PetResponse, status_code=status.HTTP_201_CREATED)
async def register_rescued_pet(
    pet_in: PetCreate,
    use_case: RegisterPetUseCase = Depends(get_register_pet_use_case)
):
    """
    Register a newly rescued pet.
    """
    # Map from Pydantic schema to Domain entity
    pet_domain = Pet(
        name=pet_in.name,
        species=pet_in.species,
        breed=pet_in.breed,
        age=pet_in.age,
        description=pet_in.description,
        rescued_at=datetime.utcnow() # Timestamp of when it was rescued/registered
    )
    
    # Execute the use case
    saved_pet = await use_case.execute(pet_domain)
    
    # The return object (domain entity) is automatically serialized by Pydantic response_model
    return saved_pet
