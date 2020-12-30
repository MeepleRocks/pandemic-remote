import { makeExecutableSchema } from "apollo-server";

export default (props = {}) => {
  return makeExecutableSchema({ typeDefs, resolvers, props });
};
