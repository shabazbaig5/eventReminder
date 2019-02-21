const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/router');
const app = express();





app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

app.set('views', __dirname+'/views');








app.use('/', homeRoute());




app.listen(3000, () => {
    console.log('listening to port 3000');
});