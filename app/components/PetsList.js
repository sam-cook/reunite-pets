import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { allPets } from "../lib/queries/pet";
import ErrorMessage from "./ErrorMessage";
import { PET_STATUS_TYPES } from "../lib/constants";

const PetsList = ({ status = PET_STATUS_TYPES.LOST }) => (
  <Query
    query={allPets}
    variables={{
      condition: {
        status
      }
    }}
  >
    {({ loading, error, data }) => {
      if (error) return <ErrorMessage message="Error loading pets. :-(" />;
      if (loading) return <div>Loading</div>;
      return (
        <section>
          <ul>
            {data.allPets.nodes.map(pet => (
              <li key={pet.id}>
                <a href={`/pets/${pet.id}`}>
                  {pet.name} - {pet.breed}
                </a>
              </li>
            ))}
          </ul>
        </section>
      );
    }}
  </Query>
);

PetsList.propTypes = {
  status: PropTypes.string.isRequired
};

export default PetsList;
