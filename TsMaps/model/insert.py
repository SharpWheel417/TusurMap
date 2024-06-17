import sqlite3


def ins(ids: str, x: str, y: str, pic: str) -> bool:
    try:
        conn = sqlite3.connect('db.db')
        cursor = conn.cursor()
        cursor.execute('''
        INSERT INTO coords (ids, x, y, pic) 
        VALUES (?, ?, ?, ?)
        ''', (ids, x, y, pic))

        # Подтверждение транзакции
        conn.commit()
        # Закрытие соединения
        conn.close()
        return True
    
    except Exception as e:
        print(e)
        return False