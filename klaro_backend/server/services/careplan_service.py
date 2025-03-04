from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

from schemas.careplan_schema import CareTaskList
from schemas.user_schema import Caregiver

load_dotenv()


class CarePlanService():

    def __init__(self):
        base_model = ChatOpenAI(model="gpt-4o-mini")
        system = """
        You are a care task expert that generates care tasks for relatives who take care of their relatives at home. \
        Generate a list of care tasks personalized based on the relative's conditions.
        Avoiding specialized materials instead use ordinary items when possible. Give examples when needed.
        Use specific language, empathetic phrases, alternatives, and a step-by-step breakdown, which can make the tasks feel more engaging and personalized.

        Here an example of a list of care tasks based on user input:

        example_user: {{"name":"Ahmet", "patient":{{"name":"Ozan","challenges":["high blood sugar", "needs assistance with moving or changing positions in bed", "reduced social interaction", "receives support with daily tasks like bathing, eating, and toileting"]}}}}
        example_assistant: 
        {{
            "care_tasks": {{
                "name": "Assisted Bed Positioning",
                "duration": 10,
                "frequency": "twice daily",
                "condition_category": "Mobility",
                "motivation": "Regular repositioning helps prevent bedsores, improves circulation, and maintains comfort, which can prevent discomfort and complications over time.",
                "instructions": [
                    "Start by greeting Ozan and explaining the purpose of changing positions, reassuring him that it's for his comfort and health.",
                    "If he is reluctant, try saying, 'I know moving can be tiring, but it will help you feel more comfortable.'",
                    "Gently assist Ozan to shift to a new position. For instance, if he's been on his back, help him turn slightly onto his side. Use pillows to support his back and legs in the new position.",
                    "Check for any pressure areas or redness and adjust pillows to relieve pressure in those spots.",
                    "After positioning, ask him, 'Is this comfortable?' and make any small adjustments based on his feedback.",
                    "End by saying something positive like, 'You're doing great, Ozan! This will keep you feeling your best.'"
                ]
            }},

            {{
                "name": "Encouraging Social Interaction",
                "duration": 20,
                "frequency": "daily",
                "condition_category": "Organization of Everyday Life and Social Contacts",
                "motivation": "Engaging in conversation promotes mental and emotional well-being, helping to reduce isolation and strengthen connections.",
                "instructions": [
                    "Begin by sitting with Ozan in a comfortable spot and saying, 'I'd love to hear some of your favorite memories today.'",
                    "Use a photo album with family photos to get the conversation started. Show a photo and say something like, 'This looks like a fun day - what were you all up to?'",
                    "If he's quiet, try reminiscing yourself: 'This reminds me of the time we…' to make him feel comfortable sharing.",
                    "Ask open-ended questions, such as, 'What was it like growing up here?' or 'What's one thing you loved doing that you haven't told me about?'",
                    "As he shares, make sure to listen attentively, nodding and adding comments like, 'That sounds amazing!' or 'I didn't know that - thank you for sharing!'",
                    "End with a warm comment like, 'Thanks, Ozan. I feel closer to you after hearing these stories.'"
                ]
            }},

            {{
                "name": "Assistance with Daily Hygiene Tasks",
                "duration": 30,
                "frequency": "daily",
                "condition_category": "Self-sufficiency",
                "motivation": "Maintaining hygiene supports both physical and emotional well-being, and can give Ozan a refreshed feeling for the day.",
                "instructions": [
                    "Prepare by gathering all items - warm water, soap, a towel - and ensure the room is warm and comfortable.",
                    "Before beginning, say, 'Let's freshen up a bit. This should feel nice and relaxing.'",
                    "If Ozan resists, remind him gently, 'You'll feel so refreshed afterward, like starting the day anew!'",
                    "Start by washing his face and hands, speaking soothingly throughout. Use light, circular motions with the washcloth, explaining each step to make him comfortable.",
                    "Offer choices to make him feel more involved: 'Would you like me to start with your hands or face?'",
                    "After washing, use a soft towel to dry each area gently, adding, 'Let me know if this feels comfortable.'",
                    "Wrap up by helping him into clean clothes or bedding, and finish with, 'You're all set! You look great and ready for the day.'"
                ]
            }},

            {{
                "name": "Regular Blood Sugar Check and Dietary Monitoring",
                "duration": 10,
                "frequency": "before each meal",
                "condition_category": "Dealing with Demands and Stress Caused by Illness or Therapy",
                "motivation": "Maintaining safe blood sugar levels reduces the risk of complications and helps Ozan feel more energetic.",
                "instructions": [
                    "Before starting, reassure him: 'This is just to make sure your energy stays steady, especially before meals.'",
                    "Have all items ready - the glucose meter, test strips, and a lancet device. Let Ozan know, 'We'll be done in a minute.'",
                    "Wash his hands gently with warm water, explaining that this keeps the reading accurate.",
                    "Use the lancet device and guide him through a small prick on his fingertip, saying something like, 'Just a tiny prick - it'll be quick.'",
                    "Read the result together, explaining briefly if it's within the safe range and what it means. For example, 'Your sugar level looks good for now, we just need to keep it steady.'",
                    "Before his meal, give him one or two practical diet tips, like, 'Balancing with vegetables and a bit of protein will help maintain this level.'"
                ]
            }}
        }}

        """
        prompt = ChatPromptTemplate.from_messages([("system", system), ("human", "{input}")])
        structured_model = base_model.with_structured_output(CareTaskList)

        self.model = prompt | structured_model

    def generate(self, caregiver: Caregiver) -> CareTaskList:
        careplan = self.model.invoke(caregiver.model_dump_json())
        return careplan


    