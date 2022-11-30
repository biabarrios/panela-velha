import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setQuantityFood } from "../../store/bagSlice";
import useStyles from "./styles";

export default function ValuePayment({ value, units, type }) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuantityFood(quantity));
  }, [quantity]);

  if (type === "quantity") {
    return (
      <div className={classes.card}>
        <p>
          {(value * quantity).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <div className={classes.quantityContainer}>
          <p>Quantidade</p>
          <div className={classes.quantity}>
            <button
              onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
            >
              -
            </button>
            <p className={classes.quantityValue}>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.card}>
      <p>
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p>{units} x</p>
    </div>
  );
}

ValuePayment.propTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.number,
  setReduxQuantity: PropTypes.func,
  type: PropTypes.string,
};
