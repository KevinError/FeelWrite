from mongoengine import Document, StringField, DateTimeField
from datetime import datetime

class Entry(Document):
    content = StringField(required=True)
    summary = StringField()
    emotion = StringField()
    createdAt = DateTimeField(default=datetime.utcnow)
    updatedAt = DateTimeField(default=datetime.utcnow)
