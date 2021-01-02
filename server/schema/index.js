const graphql = require("graphql");

const { Query } = require("./query");
const { Mutation } = require("./mutation");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
