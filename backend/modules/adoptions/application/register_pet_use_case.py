from modules.adoptions.domain.pet import Pet
from modules.adoptions.infrastructure.pet_repository import PetRepository

class RegisterPetUseCase:
    """
    Use case for registering a newly rescued pet.
    We inject the PetRepository interface so we can use a Mock in our Pytest tests.
    """
    def __init__(self, pet_repository: PetRepository):
        self.pet_repository = pet_repository

    async def execute(self, pet: Pet) -> Pet:
        # Here we could add business logic, check limits, send notifications, etc.
        saved_pet = await self.pet_repository.save(pet)
        return saved_pet
