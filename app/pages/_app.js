import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import "tachyons/css/tachyons.min.css";
import withApolloClient from "../lib/with-apollo-client";
import Header from "../components/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
        <style jsx global>
          {`
            * {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
          `}
        </style>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
