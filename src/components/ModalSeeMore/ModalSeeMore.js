import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import Card from "../CardFood";

import useStyles from "./styles";

export default function ModalSeeMore({ data, title, open, setOpen }) {
  const [scroll, setScroll] = React.useState("paper");
  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        maxWidth="lg"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>
          <h2>{title}</h2>
          <img
            src="/element3.svg"
            className={`${classes.element} ${classes.element3}`}
          />
          <img
            src="/element4.svg"
            className={`${classes.element} ${classes.element4}`}
          />
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className={classes.dialogContent}
        >
          {data.map((item) => (
            <div className={classes.card}>
              <Card data={item} />
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}

ModalSeeMore.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
