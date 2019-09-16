const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Orig {
    _id: String
    description: String
  }

  type FullItem {
    name: String!
    description: String!
    type: String!
    rarity: Int
    weapon_type: String
    damage_dice_count: Int
    damage_dice_value: Int
    damage_type: String
    range_normal: Int
    range_long: Int
    properties: [String]
    armor_type: String
    ac_base: Int
    ac_dex_bonus: Boolean
    str_min: Int
    stealth_disadvantage: Boolean
  }

  input Item {
    name: String
    description: String
    type: String
    rarity: Int
  }

  input Weapon {
    description: String
    name: String
    type: String
    rarity: Int
    weapon_type: String
    damage_dice_count: Int
    damage_dice_value: Int
    damage_type: String
    range_normal: Int
    range_long: Int
    properties: String
  }

  input Armor {
    description: String
    name: String
    type: String
    rarity: Int
    armor_type: String
    ac_base: Int
    ac_dex_bonus: Boolean
    str_min: Int
    stealth_disadvantage: Boolean
  }

  type Query {
    count: Int
    reviewList: [Orig]
    completeList: [FullItem]
    getItem(id: String!): Orig
  }

  type Mutation {
    setItem(id: String, item: Item): Boolean
    setWeapon(id: String, item: Weapon): Boolean
    setArmor(id: String, item: Armor): Boolean
  }
`);

module.exports.schema = schema;
