const express = require('express');

const port = 8000;

module.exports.db = require('./config/mongoose');

module.exports.Todo = require('./models/todo');

const app = express();

app.use(express.static('assets'));

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');








app.listen(port,function(err){
    if(err){
        console.log(`error in runing the server:${err}`);
    }
console.log(`server is runing on port:${port}`);
});