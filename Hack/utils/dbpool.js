const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "localhost",
    database : "quotes_db",
    password : "manager",
    port: 3306,
    user : "W1_89717_Tushar"
})

module.exports= pool