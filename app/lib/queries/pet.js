import gql from "graphql-tag";

export const petById = gql`
  query Pet($id: UUID!) {
    petById(id: $id) {
      id
      breed
      name
      species
      description
      status
    }
  }
`;

export const allPets = gql`
  query AllPets($condition: PetCondition) {
    allPets(condition: $condition) {
      nodes {
        id
        name
        breed
        species
        status
      }
    }
  }
`;
