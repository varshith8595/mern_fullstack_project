const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todomodel = require('./models/todo')
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://varshithgorle99:DCps1R1gaO5d2MYU@cluster0.aqw432k.mongodb.net/?retryWrites=true&w=majority&appName=cluster0')
// app.post('/add',(req,res )=> {
//     const task = req.body.task;
//     console.log(task);
//     Todomodel.create({
//         task:task
//     }).then(result => res.json(result) )
//     .catch(err => res.json(err))
// });

app.get('/get',(req,res)=>{
   Todomodel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

// app.delete('/delete/:id',(req,res) =>{
//     const {id} = req.params;
//     Todomodel.findByIdAndDelete({_id : id})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

app.delete('/delete/:id',(req,res) => {
    const {id} = req.params
    Todomodel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
.catch(err => res.json(err))
})

app.post('/add',(req,res)=>{
    const task = req.body.task
    Todomodel.create({task : task})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(4000,()=>{
    console.log("server is running on port no 4000");
})