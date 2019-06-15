import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => <aside>{message}</aside>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
