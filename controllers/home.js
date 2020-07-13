const express = require('express');
const Todo = require('../models/todo');
const Mongoose  = require('mongoose');

var TaskList = [
    {
        description:"light bill payment",
        category:"work",
        date:"06-01-2020"
    },
    {
        description:"get the car",
        category:"personal",
        date:"10-01-2020"
    }
];

module.exports.home = function(req,res){
    Todo.find({},function(err,data){
        if(err){
            console.log("error while fetching a data from db");
            return;
        }
        return res.render('home',{
            title:"TODO APP",
            TaskList:data
        });
    });
}


 module.exports.addTask = function(req,res){
    // TaskList.push(req.body);
    // console.log(req);
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log("error in creating a task",err);
            return;
        }
         console.log(newTask);
       return res.redirect('/');
    });
   
 }

 module.exports.deleteTask = async function(req,res){
    console.log(req.body.checkbox);
    idList = req.body.checkbox;
   
    for(i in idList){
        await Todo.deleteOne({_id:Mongoose.Types.ObjectId(idList[i])});
    }
    return res.redirect('back')

 }
 
