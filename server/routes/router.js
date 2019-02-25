const express = require('express');

const router = express.Router({
    caseSensitive:true
});



module.exports = () => {
    //route to render home page
    router.get('/', (req,res) => {
        const db = require('../database/db');

        db.query('SELECT * FROM events', (err,rows,columns) => {
            if(err){
                // console.log(err);
            }
            else{
                // console.log(rows);
                res.render('home', {
                    events : rows
                });

            }
        })
    });


    //post request to save the events
    router.post('/', (req,res) => {
        
        const db = require('../database/db');
        console.log(req.body);

        db.query("INSERT INTO events values(NULL, '"+req.body.name+"','"+req.body.event+"','"+req.body.date+"')", (err,rows,columns) => {
            if(err){
                console.log(err);
            }
            else{
                // res.render("home", {
                //     mesg : "event added!"
                // });
                res.redirect('/');
            }
        });

    });


    //deleting the user API
    router.get('/deleteEvent/:id', (req,res) => {
        const db = require('../database/db');

        db.query("DELETE from events where(name='"+req.params.id+"')", (err,rows,colomns) => {
            if(err){
                console.log(err);
            }
            else{
                res.send('success');
            }
        })
    });

    router.get('/home',(req,res) => {
        res.render('events');
    });




    return router;

}

