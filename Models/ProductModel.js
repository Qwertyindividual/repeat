// import connection
const db = require("../Config/database.js");

// Get All Products
const getProducts = (result) => {
    db.query("SELECT * FROM Product", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Product
const getProductById = (id, result) => {
    db.query("SELECT * FROM Product WHERE productID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Product to Database
const insertProduct = (data, result) => {
    db.query("INSERT INTO Product SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Product to Database
const updateProductById = (data, id, result) => {
    db.query("UPDATE Product SET productName = ?, productPrice = ? WHERE productID = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Product to Database
const deleteProductById = (id, result) => {
    db.query("DELETE FROM Product WHERE productID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = { getProducts, getProductById, insertProduct, updateProductById, deleteProductById };