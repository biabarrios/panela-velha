import { useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";
import ModalFood from "../ModalFood";

export default function CardFood({ data }) {
  const classes = useStyles();
  const [openModalFood, setOpenModalFood] = useState(false);

  return (
    <>
      <div
        className={classes.card}
        onClick={() => {
          setOpenModalFood(true);
        }}
      >
        <div className={classes.cardContent}>
          <div className={classes.cardText}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>
          <div className={classes.value}>
            {data.value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
        <div
          className={classes.cardContainerImage}
          style={{
            backgroundImage: `url(${data.url})`,
          }}
        />
      </div>

      <ModalFood data={data} setOpen={setOpenModalFood} open={openModalFood} />
    </>
  );
}

CardFood.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
