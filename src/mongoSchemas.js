const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Orig = new Schema({
  description: String,
});

const FullItem = new Schema({
  description: String,
  name: String,
  type: String,
  rarity: Number,
  weapon_type: String,
  damage: {
    dice_count: Number,
    dice_value: Number,
    damage_type: String,
  },
  range: {
    normal: Number,
    long: Number,
  },
  properties: [String],
  armor_type: String,
  armor_class: {
    base: Number,
    dex_bonus: Boolean,
  },
  str_min: Number,
  stealth_disadvantage: Boolean,
});

const Item = new Schema({
  description: String,
  name: String,
  type: String,
  rarity: Number,
});

Item.pre('findOneAndUpdate', function( next ) {
  this.update({}, { $inc: { __v: 1 } }, next );
});

const Weapon = new Schema({
  description: String,
  name: String,
  type: String,
  rarity: Number,
  weapon_type: String,
  damage: {
    dice_count: Number,
    dice_value: Number,
    damage_type: String,
  },
  range: {
    normal: Number,
    long: Number,
  },
  properties: String,
});

Weapon.pre('findOneAndUpdate', function( next ) {
  this.update({}, { $inc: { __v: 1 } }, next );
});

const Armor = new Schema({
  description: String,
  name: String,
  type: String,
  rarity: Number,
  armor_type: String,
  armor_class: {
    base: Number,
    dex_bonus: Boolean,
  },
  str_min: Number,
  stealth_disadvantage: Boolean,
});

Armor.pre('findOneAndUpdate', function( next ) {
  this.update({}, { $inc: { __v: 1 } }, next );
});


module.exports.Orig = mongoose.model('Orig', Orig, 'MagicItems');
module.exports.FullItem = mongoose.model('FullItem', FullItem, 'MagicItems');
module.exports.Item = mongoose.model('Item', Item, 'MagicItems');
module.exports.Weapon = mongoose.model('Weapon', Weapon, 'MagicItems');
module.exports.Armor = mongoose.model('Armor', Armor, 'MagicItems');