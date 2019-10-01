const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Orig = new Schema({
  description: String,
});

module.exports.Orig = mongoose.model('Orig', Orig, 'MagicItems');