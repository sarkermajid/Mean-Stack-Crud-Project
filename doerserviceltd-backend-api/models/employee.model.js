const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Employee", employeeSchema);