import sqlite3

# Подключение к базе данных (если файла базы данных не существует, он будет создан)
conn = sqlite3.connect('db.db')

# Создание объекта cursor для выполнения SQL-запросов
cursor = conn.cursor()

# Создание таблицы
cursor.execute('''
CREATE TABLE IF NOT EXISTS coords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ids text NOT NULL,
    x TEXT NOT NULL,
    y TEXT NOT NULL,
    pic TEXT NOT NULL
)''')


cursor.execute('''
SELECT * FROM coords''')

print(cursor.fetchall())

# Подтверждение транзакции
conn.commit()

# Закрытие соединения
conn.close()
