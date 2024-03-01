import mysql.connector
import bcrypt

def main():
    mysqldb = mysql.connector.connect(
        host="localhost",
        user="root", # replace with your mysql username
        password="!423Qrwe", # replace with your mysql password
        database="secure_users"
    )
    hashed = bcrypt.hashpw('test'.encode('utf-8'), bcrypt.gensalt())
    cursor = mysqldb.cursor()
    cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', ('test@gmail.com', hashed.hex()))
    mysqldb.commit()
    
    return

if __name__ == '__main__':
    main()