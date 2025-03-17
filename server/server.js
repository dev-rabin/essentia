const express = require('express');
const database = require('./db_connection');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
   database.ping((err) => {
    if (err) {
        res.send("Server down!")
    } else {
        res.send("Server is live!");
    }
   })
})

const ContactRoute = require("./src/routes/contact_routes");
app.use("/api", ContactRoute);

const UserRoute = require("./src/routes/user_routes");
app.use("/api", UserRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})