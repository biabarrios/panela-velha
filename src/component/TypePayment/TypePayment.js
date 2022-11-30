import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

export default function TypePayment({ type, selected, select }) {
  const classes = useStyles();

  if (type === "pix") {
    return (
      <div
        className={`${classes.card} ${classes.pix} ${
          select
            ? selected === "pix"
              ? classes.colorPix
              : classes.notSelected
            : classes.colorPix
        }`}
      >
        <p>Pix</p>
      </div>
    );
  }
  if (type === "debit") {
    return (
      <div
        className={`${classes.card} ${classes.debit} ${
          select
            ? selected === "debit"
              ? classes.colorDebit
              : classes.notSelected
            : classes.colorDebit
        }`}
      >
        <p>Débito</p>
      </div>
    );
  }
  if (type === "credit") {
    return (
      <div
        className={`${classes.card} ${classes.credit} ${
          select
            ? selected === "credit"
              ? classes.colorCredit
              : classes.notSelected
            : classes.colorCredit
        }`}
      >
        <p>Crédito</p>
      </div>
    );
  }
}

TypePayment.propTypes = {
  type: PropTypes.string.isRequired,
  select: PropTypes.bool,
  selected: PropTypes.bool,
};
