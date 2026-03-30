import mysql.connector
from mysql.connector import Error

def insert_applicant(name, email, phone, position, resume_path):
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",  # update with your DB user
            password="root",  # update with your DB password
            port=3306,
            database="astra"
        )
        cursor = connection.cursor()
        sql = """
            INSERT INTO applicants (name, email, phone, position, resume_path)
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(sql, (name, email, phone, position, resume_path))
        connection.commit()
        cursor.close()
        connection.close()
        return True
    except Error as e:
        print(f"DB Error: {e}")
        return False
