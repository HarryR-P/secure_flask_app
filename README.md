# secure_flask_app

# Setup Database
open backend/init_mysql.py and add your mysql username and password to lines 7 and 8. Then run:
python ./backend/mysql_init.py 
to initiate the database and add the test user with username: test@gmail.com and password: test1234

# Run Backend
open .flaskenv and add your mysql username and password to the MYSQL_USER, and MYSQL_PASS env variables.
switch the working directory to ./backend and run: 
flask run
to start the backend

# Run frontend
Open a second terminal and set the working directory to ./frontend and run:
npm start
to start the react frontend.

Sample User:
Username: test@gmail.com
Password: test1234