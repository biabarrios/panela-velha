import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

export default function TypePayment({ type }) {
  const classes = useStyles();

  if (type === "pix") {
    return (
      <div className={`${classes.card} ${classes.pix}`}>
        <p>Pix</p>
      </div>
    );
  }
  if (type === "debit") {
    return (
      <div className={`${classes.card} ${classes.debit}`}>
        <p>Débito</p>
      </div>
    );
  }
  if (type === "credit") {
    return (
      <div className={`${classes.card} ${classes.credit}`}>
        <p>Crédito</p>
      </div>
    );
  }
}

TypePayment.propTypes = {
  value: PropTypes.string.isRequired,
};
