import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";
import { petById } from "../lib/queries/pet";

const PetView = props => {
  return (
    <Query query={petById} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading pet :-(." />;
        if (loading) return <div>Loading</div>;
        const pet = data.petById;
        return (
          <section>
            <h1>
              {pet.name} - {pet.breed}
            </h1>
            <p>{pet.description}</p>
          </section>
        );
      }}
    </Query>
  );
};

PetView.propTypes = {
  id: PropTypes.string.isRequired
};

export default PetView;
