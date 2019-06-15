import CreatePetListing from "../components/CreatePetListing";
import { PET_STATUS_TYPES } from "../lib/constants";

export default () => (
  <>
    <CreatePetListing status={PET_STATUS_TYPES.LOST} />
  </>
);
