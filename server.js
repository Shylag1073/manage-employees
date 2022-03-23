const inquirer = require("inquirer");
const express = require("express");
const db = require('./db/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3002;
const app= express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// use routes
app.use('/route', routes);


// Start server after DB connection

  