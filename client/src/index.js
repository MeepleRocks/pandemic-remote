import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";

import CssBaseline from "@material-ui/core/CssBaseline";
import client from "app";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
