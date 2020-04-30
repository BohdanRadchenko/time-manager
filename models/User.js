const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email : {type : String, required: true, unique: true},
    name: { type: String, default: 'First Name, Second Name' },
    rules: { type: String, default: 'user' },
    password : {type : String, required: true},
})

module.exports = model('User', schema)