from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///tasks.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

def init_db():
    db.create_all()

if __name__ == "__main__":
    init_db()