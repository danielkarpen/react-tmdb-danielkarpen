import PropTypes from "prop-types";
import React from "react";

const Button = ({ txt }) => {
  return (
    <button className="bg-green-500 text-white rounded-md p-2 hover:shadow-md transition duration-300 ease-in-out">
      {txt}
    </button>
  );
};

Button.defaultProps = "Submit";

Button.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Button;
