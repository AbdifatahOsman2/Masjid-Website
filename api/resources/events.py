from flask import Blueprint, json, jsonify, request
from peewee import DoesNotExist
from flask_login import current_user, login_required
from playhouse.shortcuts import model_to_dict
from event import Event

event = Blueprint('events', __name__, url_prefix='/events')

@event.route('/', methods=['GET'])
def get_all_events():
    try:
        events = [model_to_dict(event) for event in Event.select()]
        return jsonify(events), 200
    except DoesNotExist:
        return jsonify(message="error getting resources")

@event.route('/<int:id>', methods=["GET"])
def get_one_event(id):
    event = Event.get_by_id(id)
    return jsonify(model_to_dict(event)), 200

@event.route('/', methods=['POST'])
@login_required
def create_event():
    body = request.get_json()
    event = Event.create(**body)
    event_dict = model_to_dict(event)
    return jsonify(event_dict), 201

@event.route('/<int:id>', methods=["PUT"])
@login_required
def update_event(id):
    body = request.get_json()
    (Event
        .update(**body)
        .where(Event.id==id)
        .execute())
    return jsonify(model_to_dict(Event.get_by_id(id))), 200

@event.route('/<int:id>', methods=["DELETE"])
def delete_event(id):
    (Event
        .delete()
        .where(Event.id==id)
        .execute())
    return jsonify(message="event successfully deleted!"), 200
    try:
        events = [model_to_dict(event) for event in current_user.events]
        return jsonify(events), 200
    except models.DoesNotExist:
        return jsonify(message='Error getting the resources'), 500