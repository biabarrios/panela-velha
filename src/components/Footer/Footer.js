import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useStyles from "./styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.content}>
        <img src="/logo.svg" alt="Logo Panela Velha" />
        <Box className={classes.links}>
          <Link color="inherit" to="/">
            <Typography>Cardápio</Typography>
          </Link>
          <Link color="inherit" to="/">
            <Typography>Meus pedidos</Typography>
          </Link>
        </Box>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <Typography color="#CFCFCF">Copyright©2022</Typography>
        </Box>
      </Container>
    </footer>
  );
}
