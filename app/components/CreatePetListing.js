import PropTypes from "prop-types";
import { PET_STATUS_TYPES } from "../lib/constants";

const CreatePetListing = ({ status = PET_STATUS_TYPES.LOST }) => (
  <div>
    {status === PET_STATUS_TYPES.LOST && (
      <p>
        We are sorry to hear that you have lost your pet. The form below will help with re-uniting you with your loved
        one.
      </p>
    )}
    {status === PET_STATUS_TYPES.FOUND && (
      <p>
        Thank you for deciding to report a stray pet. This form will help you create an accurate listing for the pet. We
        will also help by providing some care tips in the meantime!
      </p>
    )}
  </div>
);

CreatePetListing.propTypes = {
  status: PropTypes.string.isRequired
};

export default CreatePetListing;
