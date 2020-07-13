///require the liblary
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/todo_list_db');
//acquire the connection 
const db = mongoose.connection;
//checking for the error
db.on('error',console.error.bind(console,'error connecting to db'));
//if connection is sucessful
//up and runing then print the message
db.once('open',function(){
    console.log("sucessfully connected to database");
});