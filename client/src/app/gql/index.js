import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Cards } from "./modules/Cards";
import { Deck } from "./modules/Deck";
import { Hand } from "./modules/Hand";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ROOT,
  cache: new InMemoryCache({
    typePolicies: {
      Cards,
      Deck,
      Hand,
    },
  }),
});

export default client;
