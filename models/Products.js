const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = ('products', Products)