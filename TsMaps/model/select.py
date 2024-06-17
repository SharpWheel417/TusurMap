import sqlite3

def get_coords() -> list:
    conn = sqlite3.connect('db.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM coords')
    rows = cursor.fetchall()
    conn.close()
    print(rows)
    return rows

