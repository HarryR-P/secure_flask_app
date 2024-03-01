from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import bcrypt
import os

app = Flask(__name__)
CORS(app)

mysqldb = mysql.connector.connect(
   host="localhost",
   user=os.environ['MYSQL_USER'],
   password=os.environ['MYSQL_PASS'],
   database="secure_users"
)

@app.route('/login', methods = ['GET','POST'])  
def login():
   if request.method == 'POST':
      data = request.get_json()
      username = data['username']
      password = data['password']
      cursor = mysqldb.cursor()
      cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
      account = cursor.fetchone()
      if account is None:
         app.logger.info('Login failed')
         return {'message': 'failed'}
      hashed_pw = bytes.fromhex(account[1])
      if bcrypt.checkpw(password.encode('utf-8'), hashed_pw):
         app.logger.info('Login success')
         return {'message': 'success'}
   app.logger.info('Login failed')
   return {'message': 'failed'}
  
if __name__=='__main__': 
   app.run(debug=True, port=5000) 