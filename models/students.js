const mongoose = require('mongoose');


const StudentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    },
    gradyear:{
        type: String,
        required: false
    },
    number:{
        type: String,
        required: false
    }
});

const Student = module.exports = mongoose.model('Student', StudentSchema);