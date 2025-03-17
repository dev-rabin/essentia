const mysql = require("mysql2");
const database = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Robin@123",
    database:"essentia"
})

database.connect((err)=> {
    if(err) {
        console.log("Error connecting to database");
        
    } else {
        console.log("Database connected successfully");
        
    }
})

module.exports = database;