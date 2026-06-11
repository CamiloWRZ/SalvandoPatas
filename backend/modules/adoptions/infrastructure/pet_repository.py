from abc import ABC, abstractmethod
from sqlalchemy.ext.asyncio import AsyncSession
from modules.adoptions.domain.pet import Pet
from modules.adoptions.infrastructure.pet_model import PetORM

class PetRepository(ABC):
    @abstractmethod
    async def save(self, pet: Pet) -> Pet:
        pass

class PostgresPetRepository(PetRepository):
    def __init__(self, session: AsyncSession):
        self.session = session

    async def save(self, pet: Pet) -> Pet:
        # Convert Domain entity to ORM model
        pet_orm = PetORM(
            name=pet.name,
            species=pet.species,
            breed=pet.breed,
            age=pet.age,
            description=pet.description,
            rescued_at=pet.rescued_at
        )
        self.session.add(pet_orm)
        await self.session.commit()
        await self.session.refresh(pet_orm)
        
        # Convert back to Domain entity
        return Pet(
            id=pet_orm.id,
            name=pet_orm.name,
            species=pet_orm.species,
            breed=pet_orm.breed,
            age=pet_orm.age,
            description=pet_orm.description,
            rescued_at=pet_orm.rescued_at
        )
