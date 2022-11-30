import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ValuePayment from "../../components/ValuePayment";
import TypePayment from "../../components/TypePayment";
import Dialog from "@mui/material/Dialog";
import useStyles from "./styles";
import Stack from "@mui/material/Stack";
import { useCallback, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import { setTypePayment } from "../../store/bagSlice";
import { setRequestUser } from "../../store/requestUserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

function Payment() {
  const { data, quantity, addressUser } = useSelector((state) => state.bag);
  const dataBag = useSelector((state) => state.bag);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleTypePayment = useCallback((type) => {
    setSelectedPayment(type);
    dispatch(setTypePayment(type));
  }, []);

  console.log("dataBag:", dataBag);

  return (
    <>
      <Container
        maxWidth="xl"
        className={classes.main}
        style={{ display: "flex" }}
      >
        <div className={classes.containerFood}>
          <div className={classes.header}>
            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
            </div>
          </div>
          <ValuePayment value={data.value} units={quantity} />
          <Divider sx={{ margin: "2rem 0" }} />
          <h2>Endereço</h2>
          <p>{addressUser}</p>
          <Divider sx={{ margin: "2rem 0" }} />
          <h2>Forma de pagamento</h2>
          <Stack spacing={2} direction="row">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleTypePayment("pix");
              }}
            >
              <TypePayment
                type="pix"
                selected={selectedPayment === "pix" ? "pix" : null}
                select={true}
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleTypePayment("credit");
              }}
            >
              <TypePayment
                type="credit"
                selected={selectedPayment === "credit" ? "credit" : null}
                select
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleTypePayment("debit");
              }}
            >
              <TypePayment
                type="debit"
                selected={selectedPayment === "debit" ? "debit" : null}
                select
              />
            </div>
          </Stack>
          <Divider sx={{ margin: "2rem 0" }} />{" "}
          <button
            className={classes.button}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Finalizar pedido
            <img src="/next-icon.svg" alt="Ícone de próximo" />
          </button>
        </div>
        <aside className={classes.containerImage}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${data.url})`,
            }}
          />

          <div className={classes.containerImageAd}>
            <img
              src="https://uploads-ssl.webflow.com/6207ac0078af9c588fbbee0f/6207ac0078af9c0873bbf123_Como%20montar%20um%20negócio%20de%20quentinhas.jpg"
              alt={data.alt}
              className={classes.imageAd}
            />
            <div className={classes.containerText}></div>
            <div className={classes.contentText}>
              <img
                src="/element1.svg"
                className={`${classes.element} ${classes.element1}`}
              />
              <img
                src="/element3.svg"
                className={`${classes.element} ${classes.element3}`}
              />
              <div className={classes.text}>
                <h2>Experimente também</h2>
                <h1>Quentinha</h1>
                <h2>
                  {data.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h2>
              </div>
            </div>
          </div>
        </aside>
      </Container>

      <Dialog
        open={openModal}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="xs"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent className={classes.modal}>
          <div>
            <img src="./correct-icon.svg" alt="" />
            <h1>Pedido feito com sucesso</h1>
            <p>Seu pedido foi concluído e logo saíra para entrega</p>
          </div>
          <Button
            variant="contained"
            size="large"
            style={{ width: "100%" }}
            onClick={() => {
              dispatch(setRequestUser(dataBag));
              navigate(`/meus-pedidos`);
            }}
          >
            Acompanhar pedido
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Payment;
