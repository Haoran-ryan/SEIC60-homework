const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const quote = require('stock-quote');

const app = express();
app.set('view engine', 'ejs');
const PORT = 1337; 


app.get('/stock', (req, res) => {
    res.render('stock.ejs');
})

app.get('/result', (req, res) => {
    const inquiry = req.query.stock.toUpperCase();
    console.log(inquiry);
    quote.getQuote(inquiry).then(data => {
        console.log(JSON.stringify(data, null, 4));
        res.render('result.ejs', {data: data});
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
