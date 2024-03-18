import mysql.connector
import random
import string

# Common names list
common_names = [
    "James", "John", "Robert", "Michael", "William", 
    "David", "Richard", "Joseph", "Thomas", "Charles", 
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", 
    "Barbara", "Susan", "Jessica", "Sarah", "Karen"
    # Add more names as needed
]

# Function to generate a random item name
def generate_random_item_name():
    food_adjectives = ['Spicy', 'Tasty', 'Delicious', 'Sizzling', 'Savory', 'Zesty', 'Flavorful', 'Juicy', 'Crunchy', 'Creamy']
    food_nouns = ['Burger', 'Pizza', 'Pasta', 'Salad', 'Taco', 'Sushi', 'Sandwich', 'Curry', 'Steak', 'Ramen']
    return f"{random.choice(food_adjectives)} {random.choice(food_nouns)}"
                                
# Function to generate a random username
def generate_random_username():
    return random.choice(common_names) + str(random.randint(100, 999))

# Function to generate a random email address
def generate_random_email():
    return ''.join(random.choices(string.ascii_lowercase, k=8)) + "@example.com"

# Function to insert random values into the menu_item table
def insert_random_menu_items(cursor, num_items):
    for i in range(num_items):
        item_id = i + 1
        category = random.choice(["Appetizer", "Main Course", "Dessert", "Beverage"])
        is_in_todays_menu = random.choice([0, 1])
        item_name = generate_random_item_name()
        price = round(random.uniform(5.0, 50.0), 2)
        cursor.execute("INSERT INTO menu_item (item_id, category, image, is_in_todays_menu, item_name, price) VALUES (%s, %s, %s, %s, %s, %s)", (item_id, category, None, is_in_todays_menu, item_name, price))
    print(f"{num_items} menu items inserted successfully.")

# Function to insert random values into the user table
def insert_random_users(cursor, num_users):
    for i in range(num_users):
        user_id = i + 1
        balance = round(random.uniform(10.0, 100.0), 2)
        user_name = generate_random_username()
        email =  user_name + "@example.com"
        is_chef = random.choice([0, 1])
        password = ''.join(random.choices(string.ascii_letters + string.digits, k=8))
        cursor.execute("INSERT INTO user (user_id, balance, email, is_chef, password, user_name) VALUES (%s, %s, %s, %s, %s, %s)", (user_id, balance, email, is_chef, user_name, user_name))
    print(f"{num_users} users inserted successfully.")
    
# Function to generate a random order list
def generate_order_list(cursor):
    cursor.execute("SELECT item_id FROM menu_item")
    menu_items = cursor.fetchall()
    order_list = random.sample(menu_items, random.randint(1, 5))
    return ','.join([str(item[0]) for item in order_list])

# Function to insert random values into the order table
def insert_random_orders(cursor, num_orders):
    for i in range(num_orders):
        order_id = i + 1
        order_list = generate_order_list(cursor)
        status = random.choice(["inCart", "Processing", "Completed"])
        total_amount = random.uniform(10.0, 100.0)
        user_id = random.randint(1, 50)
        cursor.execute("INSERT INTO orders (order_id, order_list, status, total_amount, user_id) VALUES (%s, %s, %s, %s, %s)", (order_id, order_list, status, total_amount, user_id))
    print(f"{num_orders} orders inserted successfully.")
    
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="mrc_food_app"
)
# Check if connection is successful
if conn.is_connected():
    cursor = conn.cursor()

    # Define the number of menu items and users to insert
    num_items = 50
    num_users = 50
    num_orders = 50

    # Insert random menu items and users
    # insert_random_menu_items(cursor, num_items)
    # insert_random_users(cursor, num_users)
    insert_random_orders(cursor, num_orders)
    # Commit the transaction
    conn.commit()

    # Close the cursor and connection
    cursor.close()
    conn.close()
else:
    print("Failed to connect to MySQL.")
