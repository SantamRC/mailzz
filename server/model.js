const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Data=new Schema({
    Username:{
        type:String
    },
    Password:{
        type:String
    },
    Emails:[
        {
            title:{
                type:String
            },
            subject:{
                type:String
            },
            body:{
                type:String
            },
            recipient:{
                type:String
            },
            cc:[{
                type:String
            }],
            interval:{
                type:String
            }
        }
    ]

})

module.exports = mongoose.model('Data', Data);