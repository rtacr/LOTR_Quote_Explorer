const express = require('express')
const config = require("dotenv").config()
var cors = require('cors');

const characterRoutes = require('./routes/character');
const quoteRoutes = require('./routes/quote');
const movieRoutes = require('./routes/movie');

const app = express()
app.use(cors());

app.use(express.json());

app.use('/', characterRoutes);
app.use('/', quoteRoutes);
app.use('/', movieRoutes);

const PORT = process.env.PORT
app.listen(PORT, function () {
    console.log("Server Listening on " + PORT);
})