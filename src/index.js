const express = require('express');
const helmet = require('helmet');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./graphqlSchema');
const { root } = require('./graphqlResolve');

const app = express();
app.use(helmet());

app.use('/api', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: process.env.GRAPHIQL,
}));
app.listen(4000, () => console.log('listening on 4000'));