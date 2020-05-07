const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  title: {type: String, default: 'Board 0'},
  data: {type: Date, default: Date.now},
  author: {type: Types.ObjectId, ref: "User"},
  lists: {type: Array, default: []},
})

module.exports = model('Board', schema)