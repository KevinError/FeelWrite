import openai
import os
from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def analyze_entry(text):
    summary_prompt = f"Please summarize this in 3 sentences:\n{text}"
    emotion_prompt = f"Please describe the feeling in one word. (Selecet from Happy, Sad, Rage, Anxiety, Neutrel):\n{text}"

    summary_res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{ "role": "user", "content": summary_prompt }]
    )

    emotion_res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{ "role": "user", "content": emotion_prompt }]
    )

    summary = summary_res.choices[0].message.content.strip()
    emotion = emotion_res.choices[0].message.content.strip()

    return summary, emotion
