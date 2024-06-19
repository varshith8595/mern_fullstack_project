const mongoose = require('mongoose');

const Todoschema = new mongoose.Schema({
    task : String
})
const Todomodel = mongoose.model("Todo",Todoschema);
module.exports = Todomodel;