const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'view');

const app = express();

app.use(express.static(publicPath));

app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.listen(5000);
