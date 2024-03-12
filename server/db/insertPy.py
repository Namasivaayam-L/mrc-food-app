import mysql.connector, random, string

# Database connection details
DB_NAME = "mrc_food_app"
DB_USER = "root"
DB_PASSWORD = "root"
DB_HOST = "localhost"  # Modify if your database is on a different host

# Functions for generating random data (replace with your own logic if needed)
def generate_username():
    return f"RandomUser{random.randint(1, 100)}"

def generate_password():
    # Replace with a more secure password generation logic
    return f"{random.choice(string.ascii_letters)}{random.randint(1000, 9999)}"

def generate_balance():
    return random.randint(50, 500)

def generate_email(username):
    return f"{username}@example.com"

def generate_is_chef():
    return random.randint(0, 1)  # 0 for false, 1 for true

def generate_total_amount():
    return random.randint(20, 100)

def generate_order_status():
    options = ["PENDING", "PROCESSING", "COMPLETED"]
    return random.choice(options)

def generate_order_list():
    item1 = random.randint(1, 10)
    item2 = random.randint(11, 20)
    return f"item{item1},item{item2}"

def generate_item_name():
    return f"{random.choice(string.ascii_letters)}{random.randint(10, 20)} {random.choice(string.ascii_letters)}{random.randint(5, 15)}"

def generate_price():
    return random.randint(10, 50)

def generate_category():
    options = ["Pizzas", "Burgers", "Drinks", "Salads"]
    return random.choice(options)

def generate_is_in_todays_menu():
    return random.randint(0, 1)  # 0 for false, 1 for true

# Connect to the database
connection = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USER,
    password=DB_PASSWORD,
    database=DB_NAME
)

cursor = connection.cursor()

# Generate and insert data (adjust loop count and function calls as needed)
for _ in range(10):  # Adjust loop count for number of inserts

    # Generate User data
    username = generate_username()
    password = generate_password()
    balance = generate_balance()
    email = generate_email(username)
    is_chef = generate_is_chef()

    # Call insert_user function
    cursor.callproc(DB_NAME+".insert_user", (username, password, balance, email, is_chef))

    user_id = cursor.lastrowid  # Get the inserted user ID

    # Generate and insert Orders data (assuming 1-3 orders per user)
    for _ in range(random.randint(1, 3)):

        total_amount = generate_total_amount()
        status = generate_order_status()
        order_list = generate_order_list()

        # Call insert_order function
        cursor.callproc(DB_NAME+".insert_order", (user_id, total_amount, status, order_list))

    # Generate and insert MenuItem data (assuming 5-10 menu items)
    for _ in range(random.randint(5, 10)):

        item_name = generate_item_name()
        price = generate_price()
        category = generate_category()
        is_in_todays_menu = generate_is_in_todays_menu()

        # Call insert_menu_item function
        cursor.callproc(DB_NAME+".insert_menu_item", (item_name, price, category, is_in_todays_menu, None))  # None for image data

connection.commit()
cursor.close()
connection.close()

print("Data insertion completed!")
