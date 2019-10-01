const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Orig {
    _id: String
    description: String
  }
  type Query {
    count: Int
    reviewList: [Orig]
  }
`);

module.exports.schema = schema;
