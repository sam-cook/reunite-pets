import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";

export const allPetsQuery = gql`
  query {
    allPets {
      nodes {
        breed
        id
        name
        species
      }
    }
  }
`;

export default function PetView() {
  return (
    <Query query={allPetsQuery}>
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
            <style jsx>{`
              section {
                padding-bottom: 20px;
              }
              li {
                display: block;
                margin-bottom: 10px;
              }
              div {
                align-items: center;
                display: flex;
              }
              a {
                font-size: 14px;
                margin-right: 10px;
                text-decoration: none;
                padding-bottom: 0;
                border: 0;
              }
              span {
                font-size: 14px;
                margin-right: 5px;
              }
              ul {
                margin: 0;
                padding: 0;
              }
            `}</style>
          </section>
        );
      }}
    </Query>
  );
}
