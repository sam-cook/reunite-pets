import React, { Component } from "react";
import PropTypes from "prop-types";
import PetView from "../components/PetView";

export default class Pet extends Component {
  static propTypes = {
    req: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      }).isRequired
    }).isRequired,
    id: PropTypes.string
  };

  static defaultProps = {
    id: null
  };

  static getInitialProps(props) {
    return {
      id: props.req.params.id
    };
  }

  render() {
    return <PetView id={this.props.id} />;
  }
}
