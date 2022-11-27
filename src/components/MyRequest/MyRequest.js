import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import TypePayment from "../TypePayment";
import ValuePayment from "../ValuePayment";
import Divider from "@mui/material/Divider";
import Status from "../Status";

export default function MyRequest({ data }) {
  const classes = useStyles();

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return (
      [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
      ].join("/") +
      " às " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  return (
    <div className={classes.containerRequest}>
      <div
        className={classes.containerImage}
        style={{
          backgroundImage: `url(${data.url})`,
        }}
      />

      <div className={classes.card}>
        <div className={classes.header}>
          <div>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>
          <small>{formatDate(new Date(data.date))}</small>
        </div>
        <div className={classes.containerStatus}>
          <h3>Status</h3>
          <Status status={data.status} />
        </div>
        <Divider sx={{ margin: "2rem 0" }} />
        <div className={classes.containerFooter}>
          <div>
            <h3>Endereço</h3>
            <p className={classes.adress}>{data.address}</p>
          </div>
          <div>
            <h3>Forma de pagamento</h3>
            <TypePayment type={data.payment} />
          </div>
          <div>
            <ValuePayment value={data.value} units={data.unity} />
          </div>
        </div>
      </div>
    </div>
  );
}

MyRequest.propTypes = {
  data: PropTypes.object.isRequired,
};
