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
};

module.exports.root = root;
