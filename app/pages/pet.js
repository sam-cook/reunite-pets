import React, { Component } from "react";
import PetView from "../components/PetView";

export default class Pet extends Component {
  static getInitialProps(props) {
    return {
      id: props.req.params.id || null
    };
  }

  render() {
    return <PetView id={this.props.id} />;
  }
}
