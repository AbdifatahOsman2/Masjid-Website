from flask import Flask, g
import os
from flask_cors import CORS
from flask_login import LoginManager, login_manager
from db import DATABASE, initialize

from event import Event
from user import User
from resources.events import event
from resources.users import user

DEBUG = True
PORT = 8000

login_manager = LoginManager()
app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or "abdifatahssworld132"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user):
    try: 
        return User.get(User.id == user)
    except:
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response


@app.route('/')
def index():
    return 'hi'

app.register_blueprint(user)
app.register_blueprint(event)

origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([Event, User])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

CORS(app, origins=origins, supports_credentials=True)

if __name__ == '__main__':
    initialize([ Event, User ])
    app.run(debug=DEBUG, port=PORT)