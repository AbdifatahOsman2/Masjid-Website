import datetime
from peewee import *

from db import DATABASE

class Event(Model):
    name = CharField()
    time = CharField()
    location = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE