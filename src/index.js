import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

// Import Apollo Client and required libraries
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// import React Router
import { BrowserRouter } from "react-router-dom";

// Set the Graphql server uri
const httpLink = createHttpLink({
	uri: "http://localhost:4000"
});

// Configure Apollo Client
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

ReactDOM.render(
	// Render App component with Apollo Provider HOC
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
