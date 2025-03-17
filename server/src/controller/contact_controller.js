const database = require("../../db_connection");

const contactController = {
    addContactUs : (req, res) => {
        const {name, email, mobile, message} = req.body;
        console.log("Request body : ", req.body);
        
        const query = `INSERT INTO contact (name, email, mobile, message) VALUES ('${name}', '${email}', '${mobile}', '${message}')`;
        database.query(query, (err, results) => {
            if (err) {
                console.log("Failed to add contact us details : ", err);
                return res.status(500).json({success : false, message : `Failed to add contact us details : ${err.message}`})
            } else {
                console.log("Contact us details added successfully!");
                return res.status(200).json({success : true, message : "Contact us details added successfully!"})
            }
        })
    }
}

module.exports = contactController;