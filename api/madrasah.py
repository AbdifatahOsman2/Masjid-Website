import datetime
from peewee import *

from db import DATABASE

class Madrasah(Model):
    name = CharField()
    description = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE