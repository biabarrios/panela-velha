import { useState } from "react";
import Carousel from "../../components/Carousel";
import CardFood from "../../components/CardFood";
import ModalSeeMore from "../../components/ModalSeeMore";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import useStyles from "./styles";

const DATA_CAROUSEL = [
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/160/242/116615/116615_original.jpg?mode=crop&width=710&height=400",
    name: "Cachorro Quente",
    alt: "Imagem de cachorro quente",
    description: "Imagem de cachorro quente",
    quantityServing: 1,
    value: 15.0,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/shutterstock_1370793356.jpg",
    name: "Ovo Mexido",
    alt: "Imagem de ovo mexido",
    description: "Imagem de ovo mexido",
    quantityServing: 1,
    value: 10.0,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/104/591/36642/36642_original.jpg?mode=crop&width=710&height=400",
    name: "Chester Desossado",
    alt: "Imagem de chester desossado com farofa de frutas secas",
    quantityServing: 1,
    description: "Imagem de chester desossado com farofa de frutas secas",
    value: 35.25,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/blog/uploads/2022/03/Como-fazer-bolo-de-cenoura-que-sai-recheado-do-forno.jpg",
    name: "Bolo de Cenoura",
    quantityServing: 1,
    alt: "Imagem de bolo de cenoura",
    description: "Imagem de bolo de cenoura",
    value: 15.45,
  },
  {
    url: "https://img.itdg.com.br/tdg/images/recipes/000/042/591/348907/348907_original.jpg?mode=crop&width=710&height=400",
    name: "Canja de Galinha",
    alt: "Imagem de canja de galinha",
    quantityServing: 1,
    description: "Imagem de canja de galinha",
    value: 25.5,
  },
  {
    url: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2022/07/15/1992932943-receitasparacriancas-cachorroquente.jpg",
    name: "Cachorro-quente de espeto",
    alt: "Imagem de Cachorro-quente de espeto",
    quantityServing: 1,
    description: "Imagem de Cachorro-quente de espeto",
    value: 25.5,
  },
];

const BEBIDAS = [
  {
    url: "https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/refrigerante-guarana-antarctica-lata-350-ml_2020-11-24_14-10-38_0_535.jpeg",
    name: "Refrigerante Guaraná Antarctica",
    alt: "Imagem de Refrigerante Guaraná Antarctica - Lata 350 ml",
    description: "Imagem de Refrigerante Guaraná Antarctica - Lata 350 ml",
    value: 5.0,
  },
  {
    url: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2013/11/30/cocacoaacucar.jpg",
    name: "Refrigerante Coca-Cola",
    alt: "Imagem de Refrigerante Coca-Cola - Lata 350 ml",
    description: "Imagem de Refrigerante Coca-Cola - Lata 350 ml",
    value: 5.0,
  },
  {
    url: "https://www.galaxcommerce.com.br/sistema/upload/1994/produtos/refrigerante-coca-cola-minipet-200-ml_2020-11-24_13-51-29_0_126.jpg",
    name: "Refrigerante Coca-Cola",
    alt: "Imagem de Refrigerante Coca-Cola - MiniPet 200 ml",
    description: "Imagem de Refrigerante Coca-Cola - MiniPet 200 ml",
    value: 5.0,
  },
  {
    url: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/2868-agua-mineral-lindoya-sem-gas-500ml.20221122092805.jpg?s=498304493177ffce9ba6a2dab71e114f",
    name: "Água Mineral Lindóya Sem Gás 500ml",
    alt: "Imagem de Água Mineral Lindóya Sem Gás 500ml",
    description: "Imagem de Água Mineral Lindóya Sem Gás 500ml",
    value: 5.0,
  },
];

function Home() {
  const classes = useStyles();
  const [openModalDestaques, setOpenModalDestaques] = useState(false);
  const [openModalMaisPedidos, setOpenModalMaisPedidos] = useState(false);
  const [openModalBebidas, setOpenModalBebidas] = useState(false);

  return (
    <Container maxWidth="xl" className={classes.main}>
      <main>
        <Carousel data={DATA_CAROUSEL} />
        <section className={classes.section}>
          <div className={classes.header}>
            <h2>Destaques</h2>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpenModalDestaques(true)}
            >
              Ver mais
            </Button>
          </div>
          <div className={classes.sectionCards}>
            {DATA_CAROUSEL.map((item) => (
              <div className={classes.card}>
                <CardFood
                  data={item}
                  onClick={() => {
                    setDataModal(item);
                  }}
                />
              </div>
            ))}
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.header}>
            <h2>Mais pedidos</h2>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpenModalMaisPedidos(true)}
            >
              Ver mais
            </Button>
          </div>
          <div className={classes.sectionCards}>
            {DATA_CAROUSEL.map((item) => (
              <div className={classes.card}>
                <CardFood data={item} />
              </div>
            ))}
          </div>
        </section>
        <section className={classes.section}>
          <div className={classes.header}>
            <h2>Bebidas</h2>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setOpenModalBebidas(true)}
            >
              Ver mais
            </Button>
          </div>
          <div className={classes.sectionCards}>
            {BEBIDAS.map((item) => (
              <div className={classes.card}>
                <CardFood data={item} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <ModalSeeMore
        title="Destaques"
        data={DATA_CAROUSEL}
        setOpen={setOpenModalDestaques}
        open={openModalDestaques}
      />
      <ModalSeeMore
        title="Mais pedidos"
        data={DATA_CAROUSEL}
        BEBIDAS
        setOpen={setOpenModalMaisPedidos}
        open={openModalMaisPedidos}
      />
      <ModalSeeMore
        title="Bebidas"
        data={BEBIDAS}
        setOpen={setOpenModalBebidas}
        open={openModalBebidas}
      />
    </Container>
  );
}

export default Home;
