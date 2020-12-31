import { Provider as Redux } from "react-redux";
import { ApolloProvider as Apollo } from "@apollo/client";

import gqlClient from "app/gql";
import reduxClient from "app/redux";

const ReduxProvider = ({ children }) => (
  <Redux store={reduxClient}>{children}</Redux>
);
const ApolloProvider = ({ children }) => (
  <Apollo client={gqlClient}>{children}</Apollo>
);

const GQL_FLAG = process.env.REACT_APP_GQL_FLAG;
let Provider = ReduxProvider;
if (GQL_FLAG) {
  Provider = ApolloProvider;
}

export default Provider;
