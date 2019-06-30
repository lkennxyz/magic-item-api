const { dbConnect, dbClose } = require('./db');
const { Orig, Item, Weapon, Armor } = require('./mongoSchemas');

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
    const rtn = await Orig.find().exec();
    dbClose();
    return rtn;
  },
  getItem: async({ id }) => {
    dbConnect();
    const rtn = await Orig.findById(id).exec();
    dbClose();
    return rtn;
  },
  setItem: async({ id, item }) => {
    try {
      dbConnect();
      const itm = await Item.findByIdAndUpdate(id, item).exec();
      dbClose();
      return true;
    } catch (err) {
      console.error(err);
      return false
    }
  },
  setWeapon: async({ id, item }) => {
    try {
      dbConnect();
      const itm = await Weapon.findByIdAndUpdate(id, item).exec();
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
      const itm = await Armor.findByIdAndUpdate(id, item).exec();
      dbClose();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};

module.exports.root = root;
