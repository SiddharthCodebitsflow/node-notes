const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
    const heading = {
        "heading1": "This is heading one",
        "heading2": "This is heading two",
        "heading3": "This is heading three",
    };
    res.render('home', { heading });
});

app.get('/about', (_, res) => {
    res.render('about');
});

app.listen(5000);