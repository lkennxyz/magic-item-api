const { dbConnect, dbClose } = require('./db');
const { Orig, FullItem, Item, Weapon, Armor } = require('./mongoSchemas');

const root = {
  count: async () => {
    dbConnect();
    // const rtn = await Orig.countDocuments().where({ __v: 0 }).exec();
    const rtn = await Orig.countDocuments({ __v: 0 }).exec();
    dbClose();
    return rtn;
  },
  reviewList: async() => {
    dbConnect();
    const rtn = await Orig.find({ __v: 0 }).exec();
    dbClose();
    return rtn;
  },
  completeList: async() => {
    dbConnect();
    const dbo = await FullItem.find({ __v: { $ne: 0 } }).exec();
    const rtn = await dbo.map(el => ({
      name: el.name,
      description: el.description,
      type: el.type,
      rarity: el.rarity,
      weapon_type: el.weapon_type,
      damage_dice_count: (el.damage) ? el.damage.dice_count : null,
      damage_dice_value: (el.damage) ? el.damage.dice_value : null,
      damage_type: (el.damage) ? el.damage.damage_type : null,
      range_normal: (el.range) ? el.range.normal : null,
      range_long: (el.range) ? el.range.long : null,
      properties: el.properties,
      armor_type: el.armor_type,
      ac_base: (el.armor_class) ? el.armor_class.base : null,
      ac_dex_bonus: (el.armor_class) ? el.armor_class.dex_bonus : null,
      str_min: el.str_min,
      stealth_disadvantage: el.stealth_disadvantage,
    }));
    dbClose();
    return rtn;
  },
  setWeapon: async({ id, item }) => {
    try {
      dbConnect();
      const dbItm = Object.assign({}, item, {
        damage: {
          dice_count: item.damage_dice_count,
          dice_value: item.damage_dice_value,
          damage_type: item.damage_type
        },
        range: {
          normal: item.range_normal,
          long: item.range_long,
        }
      })
      const itm = await Weapon.findByIdAndUpdate(id, dbItm).exec();
      dbClose();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
  setArmor: async({ id, item }) => {
    try {
      dbConnect();
      const dbItm = Object.assign({}, item, {
        armor_class: {
          base: item.ac_base,
          dex_bonus: item.ac_dex_bonus,
        }
      })
      const itm = await Armor.findByIdAndUpdate(id, dbItm).exec();
      dbClose();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
  setItem: async({ id, item }) => {
    try {
      dbConnect();
      const itm = await Item.findByIdAndUpdate(id, item).exec();
      dbClose();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
};

module.exports.root = root;
