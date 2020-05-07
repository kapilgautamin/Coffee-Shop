const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    img:{
        type:String
    },
    category:{
        type:String,
        default:"Espresso"
    },
    price:{
        type:Number,
        required:true
    },
    units:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = Item = mongoose.model('item',ItemSchema);