const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Orig {
    _id: String
    description: String
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
    damage: Damage
    range: Range
    properties: [String]
  }

  input Damage {
    dice_count: Int
    dice_value: Int
    damage_type: String
  }

  input Range { 
    normal: Int
    long: Int
  }

  input Armor {
    description: String
    name: String
    type: String
    rarity: Int
    armor_type: String
    armor_class: AC
    str_min: Int
    stealth_disadvantage: Boolean
  }

  input AC {
    base: Int
    dex_bonus: Boolean
  }
  
  type Query {
    count: Int
    reviewList: [Orig]
    completeList: [Orig]
    getItem(id: String!): Orig
  }

  type Mutation {
    setItem(id: String, item: Item): Boolean
    setWeapon(id: String, item: Weapon): Boolean
    setArmor(id: String, item: Armor): Boolean
  }
`);

module.exports.schema = schema;
