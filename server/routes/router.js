const express = require('express');

const router = express.Router({
    caseSensitive:true
});



module.exports = () => {

    router.get('/', (req,res) => {
        const db = require('../database/db');

        db.query('SELECT * FROM events', (err,rows,columns) => {
            if(err){
                console.log(err);
            }
            else{
                console.log(rows);
                res.render('home', {
                    events : rows
                });

            }
        })
    })

    router.get('/home',(req,res) => {
        res.render('events');
    });



    return router;

}

