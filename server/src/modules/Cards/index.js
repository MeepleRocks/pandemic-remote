const { makeExecutableSchema } = require("apollo-server");
const resolvers = require("./resolver");

const { typeDefs } = require("./typeDefs");

module.exports.schema = (props = {}) => {
  return makeExecutableSchema({ typeDefs, resolvers, ...props });
};
