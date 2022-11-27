import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const steps = [
  "Pagamento efetuado",
  "Preparando pedido",
  "Saindo para entrega",
  "Pedido entregue",
];

export default function Status({ status }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={status}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

Status.propTypes = {
  status: PropTypes.number.isRequired,
};
