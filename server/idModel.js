const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ID=new Schema({
    number:{
        type:String
    }
})

module.exports = mongoose.model('ID', ID);