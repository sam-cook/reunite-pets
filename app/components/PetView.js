import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";

export const getPetQuery = gql`
  query Pet($id: UUID!) {
    petById(id: $id) {
      id
      breed
      name
      species
    }
  }
`;

export default function PetView(props) {
  return (
    <Query query={getPetQuery} variables={{ id: props.id }}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading pet :-(." />;
        if (loading) return <div>Loading</div>;
        const pet = data.petById;
        return (
          <section>
            <h1>
              {pet.name} - {pet.breed}
            </h1>
          </section>
        );
      }}
    </Query>
  );
}
