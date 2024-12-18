from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    entityname = db.Column(db.String, nullable=False)
    tasktype = db.Column(db.String, nullable=False)
    date = db.Column(db.Date, nullable=False)
    phone = db.Column(db.String, nullable=False)
    contactperson = db.Column(db.String, nullable=False)
    notes = db.Column(db.String, nullable=True)
    status = db.Column(db.String, default='open', nullable=False)