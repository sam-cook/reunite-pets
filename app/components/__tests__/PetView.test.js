import React from "react";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import { render } from "@testing-library/react";
import { petById } from "../../lib/queries/pet";
import PetView from "../PetView";

const mocks = [
  {
    request: {
      query: petById,
      variables: {
        id: "wew lad"
      }
    },
    result: {
      data: {
        petById: {
          id: "wew lad",
          name: "Buck",
          breed: "bulldog",
          species: "dog"
        }
      }
    }
  }
];

it("renders a component or something", async () => {
  const { container } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PetView id="wew lad" />
    </MockedProvider>
  );

  await wait(0);

  expect(container.firstChild).toMatchSnapshot();
});
