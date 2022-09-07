const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contact = new Schema ({
    name:{
        type: String,
        
    },
    email:{
        type: String,
      
    },
    phoneNumber:{
        type: Number,
        
    },
    subject:{
        type: String,
        
    },
    message:{
        type: String,
        
    }
})

mongoose.model('contact', Contact)