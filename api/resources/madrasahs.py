from flask import Blueprint, json, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from madrasah import Madrasah

madrasah = Blueprint('madrasahs', __name__, url_prefix='/madrasahs')



@madrasah.route('/', methods=['GET'])
def get_all_madrasahs():
    try:
        madrasahs = [model_to_dict(madrasah) for madrasah in Madrasah]
        return jsonify(madrasahs), 200
    except DoesNotExist:
        return jsonify(message="error getting resources")


@madrasah.route('/<int:id>', methods=["GET"])
def get_one_madrasah(id):
    madrasah = Madrasah.get_by_id(id)
    return jsonify(model_to_dict(madrasah)), 200


@madrasah.route('/', methods=['POST'])
def create_madrasah():
    body = request.get_json()
    madrasah = Madrasah.create(**body)
    madrasah_dict = model_to_dict(madrasah)
    return jsonify(madrasah_dict), 201


@madrasah.route('/<id>', methods=["PUT"])
def update_madrasah(id):
    body = request.get_json()
    (Madrasah
        .update(**body)
        .where(Madrasah.id==id)
        .execute())
    return jsonify(model_to_dict(Madrasah.get_by_id(id))), 200

@madrasah.route('/<id>', methods=["DELETE"])
def delete_madrasah(id):
    (Madrasah.delete()
        .where(Madrasah.id==id)
        .execute())
    return jsonify(message=f"madrasah with id {id} successfully deleted!"), 200