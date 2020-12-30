const { ApolloServer, mergeSchemas } = require("apollo-server");
const { schema: CardModule } = require("./modules/Cards");

const Cards = CardModule();

const schema = mergeSchemas({ schemas: [Cards] });

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
