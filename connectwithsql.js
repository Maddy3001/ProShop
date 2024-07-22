const mysql = require('mysql2');
let customerName = {}

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    "password": "",
    insecureAuth: true,
    database: "classicmodels"
});

// connection.connect(function (error, result) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('connection established');
//     }
// })

// connection.query('SELECT customerName FROM customers', function (error, result, fields) {
//     if (error) {
//         console.log(error.stack)
//     } else {
//         customerName = result
//         console.log(customerName);
//         // console.log(fields);
//     }
// })

// async function getCustomers(){
//     let pool = await connection.connect('')
// }