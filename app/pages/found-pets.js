import PetsList from "../components/PetsList";
import { PET_STATUS_TYPES } from "../lib/constants";

export default () => (
  <>
    <PetsList status={PET_STATUS_TYPES.FOUND} />
  </>
);
