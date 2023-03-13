from flask import Flask, request, jsonify
import pymongo
import certifi

app = Flask(__name__)
client = pymongo.MongoClient("mongodb+srv://nutriousio:cscs@mycluster.s7bglaq.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())
db = client.nio

# SignUp.jsx has email, password, and calorie_limit
# instance/mongodb.py has additional six values 

@app.route('/signup', methods=['POST'])
def signup():
    email = request.json['email'].lower()
    password = request.json['password']
    calorie_limit = request.json['calorie_limit']
    
    # name = request.form['name']
    # mobile_number = request.form['mobile_number']
    # DOB = request.form['DOB']
    # gender = request.form['gender']
    # height = request.form['height']
    # weight = request.form['weight']
    
    
    existing_user = db.user.find_one({'email': email})
    if existing_user:
        return jsonify({'error': 'Email already exists'}), 400

    try:
        calorie_limit = int(calorie_limit)
    except ValueError:
        return jsonify({'error': 'Invalid calorie limit'}), 400

    user = {
        'email': email,
        'password': password,
        'calorie_limit': calorie_limit
        
        # 'name': name,
        # 'mobile_number': mobile_number,
        # 'DOB' :DOB,
        # 'gender': gender,
        # 'height': height,
        # 'weight': weight                     
        
    }
    db.user.insert_one(user)

    return jsonify({'message': 'User created successfully'})

if __name__ == '__main__':
    app.run(debug=True)
