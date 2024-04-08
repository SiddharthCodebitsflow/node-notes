const express = require('express');
const app = express();

app.get("/first-route", (req, res) => {
    res.send(`<h1>This is query data ${req.query.name}`); // print query data 
});

app.listen(5000);