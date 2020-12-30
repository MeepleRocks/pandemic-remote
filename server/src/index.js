import { ApolloServer, mergeSchemas } from "apollo-server";
import CardModule from "./Modules/Cards";

const schema = mergeSchemas({ schemas: [CardModule] });

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
