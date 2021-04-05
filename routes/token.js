const express = require('express');
const router = express.Router();
const path = require("path");
require("dotenv").config(path.join(__dirname, "../.env"));

const generateAccessToken = require("../functions/twilio_access_token")


router.get("/", (req, res) => {
    res.send("Welcome Welcome")
})

router.post("/", (req, res) => {
    try {
        let name = req.body.name;
        let roomID = req.body.roomID;
        let token = generateAccessToken(name, roomID)
        res.status(200).json({ message: token });
        console.log(token)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error Check Logs" });
    }

})

module.exports = router;


