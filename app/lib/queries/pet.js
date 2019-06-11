import gql from "graphql-tag";

export const petById = gql`
  query Pet($id: UUID!) {
    petById(id: $id) {
      id
      breed
      name
      species
    }
  }
`;
