from fastapi import APIRouter

from schemas.user_schema import Caregiver
from schemas.careplan_schema import CareTaskList
from services.careplan_service import CarePlanService

service = CarePlanService()

router = APIRouter(
    prefix="/careplan",
    tags=["careplan"],
    responses={404: {"description": "Not found"}},
)

@router.post("/generate")
async def generate_careplan(caregiver: Caregiver) -> CareTaskList:
    careplan = service.generate(caregiver=caregiver)
    return careplan


