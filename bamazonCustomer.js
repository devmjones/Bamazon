/**
 * Created by devon.jones on 8/5/17.
 */
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("WELCOME TO BAMAZON!!! NOW BUY SOMETHING!!! ");
  connection.query("SELECT * FROM products;", function(err, results) {

    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id + " | " + results[i].product_name + " | " + results[i].price)
    }
    start();
  });

});


function start() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Enter the id of the item you wish to purchase"
      }
    ])
    .then(function(answer) {
      var itemId = answer.id;
      connection.query("SELECT stock_quantity FROM products WHERE item_id = " + itemId + ";", function(err, results) {
        var qty = results[0].stock_quantity;
        if (qty > 0) {
          purchase(itemId);
        }
        else {
          console.log("Sorry, this item is out of stock")
        }
      });
    });
}

function purchase(itemId) {
  connection.query("SELECT product_name, price, stock_quantity FROM products WHERE item_id = " + itemId + ";", function(err, results) {
    var name = results[0].product_name;
    var price = results[0].price;
    var qty = results[0].stock_quantity;
    var newQty = qty -1;
    inquirer
      .prompt([
        {
          name: "yesOrNo",
          type: "rawlist",
          message: name + " is " + price + ". Would you like to purchase?",
          choices: ["YES", "NO"]
        }
      ])
      .then(function(answer) {
        if (answer.yesOrNo.toUpperCase() === "YES") {
          connection.query(
            "UPDATE products SET stock_quantity="+ newQty +" WHERE item_id=" + itemId,
            function(err, res) {
              console.log("Sold!");
              start();
            }
          );

        }
        else {
          start();
        }
      });
  });


}

