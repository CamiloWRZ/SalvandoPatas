from dataclasses import dataclass
from typing import Optional
from datetime import datetime

@dataclass
class Pet:
    name: str
    species: str
    breed: Optional[str]
    age: Optional[int] # In months
    description: Optional[str]
    rescued_at: datetime
    id: Optional[int] = None
    
    # We could add pure domain logic here later, e.g., validation rules
    def is_puppy(self) -> bool:
        if self.age is None:
            return False
        return self.age < 12
