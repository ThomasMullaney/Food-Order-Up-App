CREATE DATABASE food_orders;
USE food_orders;
CREATE TABLE orders (
   id INT AUTO_INCREMENT PRIMARY KEY,
   order_name text,
   cooking BOOLEAN DEFAULT false
)



