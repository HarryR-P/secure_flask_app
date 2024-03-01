import mysql.connector
import bcrypt

def main():
    db = mysql.connector.connect(
        host="localhost",
        user="yourusername", # replace with your mysql username
        password="yourpassword" # replace with your mysql password
    )
    cursor = db.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS secure_users")
    cursor.execute("USE secure_users")
    cursor.execute("CREATE TABLE IF NOT EXISTS users (username VARCHAR(255) PRIMARY KEY, password VARBINARY(255))")
    hashed = bcrypt.hashpw('test'.encode('utf-8'), bcrypt.gensalt())
    cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', ('test@gmail.com', hashed.hex()))
    db.commit()

    print("Database initialized")

if __name__ == '__main__':
    main()