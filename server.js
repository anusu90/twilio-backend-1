const express = require("express");
const app = express();
const path = require("path")

app.get("/", (req, res) => {
    res.send("hello world")
})