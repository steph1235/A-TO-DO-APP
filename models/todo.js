
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'the todo text field is required'],
    },
    item1: { 
        type: String,
        required:[true,'the text field is required'],

    },
    item2:{
        type:String,
        required:[true,'the todo text field isrequired'],
    },

},{timestamps:true});

const Todo = mongoose.model('todo',TodoSchema);

module.exports = Todo;