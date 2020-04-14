import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";



const cache = new InMemoryCache({
  freezeResults: true
});
const link = new HttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  cache,
  link,
  assumeImmutableResults: true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);