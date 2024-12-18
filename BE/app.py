from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

client = MongoClient(os.getenv('MONGO_URL'))
db = client.task_planner
tasks_collection = db.tasks

@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = list(tasks_collection.find())
    for task in tasks:
        task['_id'] = str(task['_id'])
    return jsonify(tasks)

@app.route('/add', methods=['POST'])
def add_task():
    data = request.json
    new_task = {
        'entityname': data['entityname'],
        'tasktype': data['tasktype'],
        'date': data['date'],
        'phone': data['phone'],
        'contactperson': data['contactperson'],
        'notes': data.get('notes'),
        'status': data.get('status', 'open')
    }
    result = tasks_collection.insert_one(new_task)
    new_task['_id'] = str(result.inserted_id)
    return jsonify(new_task), 201

@app.route('/tasks/<id>', methods=['PUT'])
def update_task(id):
    data = request.json
    updated_task = {
        'entityname': data.get('entityname'),
        'tasktype': data.get('tasktype'),
        'date': data.get('date'),
        'phone': data.get('phone'),
        'contactperson': data.get('contactperson'),
        'notes': data.get('notes'),
        'status': data.get('status', 'open')
    }
    tasks_collection.update_one({'_id': ObjectId(id)}, {'$set': updated_task})
    updated_task['_id'] = id
    return jsonify(updated_task)

@app.route('/tasks/<id>', methods=['DELETE'])
def delete_task(id):
    tasks_collection.delete_one({'_id': ObjectId(id)})
    return jsonify({'message': 'Task deleted'})

if __name__ == '__main__':
    app.run(debug=True)