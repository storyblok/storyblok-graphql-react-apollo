import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  concat,
  HttpLink,
} from "@apollo/client";
import { storyblokInit } from "@storyblok/react";
import "./index.css";
import App from "./App";

import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  page: Page,
  teaser: Teaser,
};

storyblokInit({
  accessToken: "d6IKUtAUDiKyAhpJtrLFcwtt",
  components,
});

const httpLink = new HttpLink({ uri: "https://gapi.storyblok.com/v1/api" });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: "d6IKUtAUDiKyAhpJtrLFcwtt",
      version: "draft",
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
