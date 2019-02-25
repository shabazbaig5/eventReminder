const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/router');
const app = express();





app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');

app.set('views', __dirname+'/views');








app.use('/', homeRoute());



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('What do you do?', (answer) => {
//     console.log('Thankssssssssss');
// });

app.listen(3000, () => {
    console.log('listening to port 3000');
});