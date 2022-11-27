import Container from "@mui/material/Container";
import useStyles from "./styles";
import MyRequest from "../../components/MyRequest";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const MEUS_PEDIDOS = [
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/160/242/116615/116615_original.jpg?mode=crop&width=710&height=400",
    name: "Cachorro Quente",
    alt: "Imagem de cachorro quente",
    description: "Imagem de cachorro quente",
    value: 15.0,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "pix",
    unity: 1,
    status: 0,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/shutterstock_1370793356.jpg",
    name: "Ovo Mexido",
    alt: "Imagem de ovo mexido",
    description: "Imagem de ovo mexido",
    value: 10.0,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "debit",
    unity: 2,
    status: 1,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/104/591/36642/36642_original.jpg?mode=crop&width=710&height=400",
    name: "Chester Desossado",
    alt: "Imagem de chester desossado com farofa de frutas secas",
    description: "Imagem de chester desossado com farofa de frutas secas",
    value: 35.25,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "credit",
    unity: 3,
    status: 2,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/Como-fazer-bolo-de-cenoura-que-sai-recheado-do-forno.jpg",
    name: "Bolo de Cenoura",
    alt: "Imagem de bolo de cenoura",
    description: "Imagem de bolo de cenoura",
    value: 15.45,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "pix",
    unity: 4,
    status: 3,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/042/591/348907/348907_original.jpg?mode=crop&width=710&height=400",
    name: "Canja de Galinha",
    alt: "Imagem de canja de galinha",
    description: "Imagem de canja de galinha",
    value: 25.5,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "pix",
    unity: 5,
    status: 4,
  },
  {
    url: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/15/1992932943-receitasparacriancas-cachorroquente.jpg",
    name: "Cachorro-quente de espeto",
    alt: "Imagem de Cachorro-quente de espeto",
    description: "Imagem de Cachorro-quente de espeto",
    value: 25.5,
    date: "Thu Nov 24 2022 20:31:36 GMT-0300 (Horário Padrão de Brasília)",
    address: "R. Pereira da Costa, 379 - Noivos, Teresina - PI, 64046-080",
    payment: "pix",
    unity: 5,
    status: 4,
  },
];

function Payment() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.main}>
      <div className={classes.header}>
        <h1>Meus pedidos</h1>
      </div>
      <div className="containerMyRequests">
        {MEUS_PEDIDOS.length !== 0 ? (
          MEUS_PEDIDOS.map((item) => <MyRequest data={item} />)
        ) : (
          <div className={classes.emptyData}>
            <img src="/pan-empty.svg" alt="Ícone de panela" />
            <h1>Você não tem nenhum pedido :/</h1>
            <Link to="/">
              <Button
                onClick={() => {}}
                sx={{ padding: "1rem 1.5rem" }}
                variant="contained"
                size="large"
              >
                Clique aqui para fazer seu primeito pedido
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Payment;
