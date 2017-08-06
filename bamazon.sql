DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45)  NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Sweater", "Pets", "19.99", 29);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Sweater","Pets", "15.99", 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paleo Coffee Beans", "Grocery", "19.99", 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Romper", "Men's Clothing", "29.99", 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Mankini", "Men's Clothing", "19.99", 32);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Ugly Sweater", "Women's Clothing", "19.99", 9);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wasabi Toothpaste","Health and Beauty", "5.99", 22);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mustache Glue", "Health and Beauty", "4.99", 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Underwear Perfume", "Health and Beauty", "7.99", 29);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gluten-Free Water", "Grocery", "10.99", 62);