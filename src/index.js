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
import "./index.css";
import App from "./App";

const httpLink = new HttpLink({ uri: "https://gapi.storyblok.com/v1/api" });

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			token: process.env.REACT_APP_PREVIEW_TOKEN,
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
