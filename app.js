require("dotenv").config();
const express = require('express')
const connectToDB = require("./config/db");
const routes = require("./Router/routers")
const app = express()


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", routes)

module.exports = app;
