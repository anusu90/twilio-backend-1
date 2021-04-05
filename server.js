const express = require("express");
const app = express();
const path = require("path")
require("dotenv").config(path.join(__dirname, ".env"))

//declare routes
const authTokenRouter = require("./routes/token")

//declare port
const port = process.env.PORT || 5050

//SETTING UP MIDDLEWARES

//cors middleware
app.use((req, res, next) => {

    console.log("cors middleware");
    let whitelistOrigins = ["http://localhost:3000"]
    if (whitelistOrigins.indexOf(req.headers.origin) != -1) {
        res.header("Access-Control-Allow-Origin", req.headers.origin)
    };
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Set-Cookie");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

//json middleware
app.use(express.json());

//route middleware.
app.use('/authtoken', authTokenRouter)

app.get("/", (req, res) => {
    res.send("Welcome to strider server");
})

app.listen(port, () => {
    console.log("server started");
})