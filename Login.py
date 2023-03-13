from flask import Flask, redirect, jsonify
import pymongo
import certifi
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = pymongo.MongoClient("mongodb+srv://nutriousio:cscs@mycluster.s7bglaq.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.nio

@app.route('/login', methods=['POST'])
def login():
    user = db.user.find_one({
      'email': request.json['email'].lower()
    })
    if user and request.json['password'] == user['password']:
      return redirect('/Landing')
    
    return jsonify({ 'error': 'Invalid email or password' }), 401

if __name__ == '__main__':
    app.run(debug=True)
