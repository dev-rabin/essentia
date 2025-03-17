const database = require("../../db_connection");

const UserController = {
    addUser : (req, res) => {
        const {name, email, mobile} = req.body;
        const query = `INSERT INTO user (name, email, mobile) VALUES ('${name}', '${email}', '${mobile}')`;
        database.query(query, (err, results) => {
            if (err) {
                console.log("Failed to add user : ", err);
                return res.status(500).json({success : false, message : `Failed to add user : ${err.message}`})
            } else {
                console.log("User added successfully!");
                return res.status(200).json({success : true, message : "User added successfully!"})
            }
        })
    }
}

module.exports = UserController;