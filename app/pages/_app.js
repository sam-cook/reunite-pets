import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";
import Template from "../components/App";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Template>
            <Header />
            <Component {...pageProps} />
          </Template>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
