import { useEffect, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import ValuePayment from "../ValuePayment";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { addFood } from "../../store/bagSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

export default function ModalFood({ data, open, setOpen }) {
  const [scroll, setScroll] = useState("paper");
  const classes = useStyles();
  const descriptionElementRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectPayment = () => {
    dispatch(addFood({ ...data }));
    navigate(`/pagamento`);
  };

  useEffect(() => {
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
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <button
          className={classes.closeButton}
          onClick={() => {
            setOpen(false);
          }}
        >
          <img src="/close-button.svg" alt="" />
        </button>
        <div
          className={classes.cardContainerImage}
          style={{
            backgroundImage: `url(${data.url})`,
          }}
        />
        <div className={classes.content}>
          <div className={classes.contentText}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <div className={classes.quantityServing}>
              <p>Serve {data.quantityServing} pessoa(s)</p>
            </div>
          </div>
          <ValuePayment type="quantity" value={data.value} />
          <Divider sx={{ margin: "2rem 0" }} />
          <button
            className={classes.button}
            onClick={() => handleSelectPayment()}
          >
            Escolher forma de pagamento
            <img src="/next-icon.svg" alt="Ícone de próximo" />
          </button>
        </div>
      </Dialog>
    </div>
  );
}

ModalFood.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};
