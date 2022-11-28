import useStyles from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { Grid, Container, InputAdornment, Card } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { request } from "../../util/request";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

const schema = yup.object({
  nome: yup.string().required("O nome do produto é obrigatório"),
  preco: yup.string().required("O preço é obrigatória"),
});

const initialValues = {
  nome: "",
  preco: "",
};

const Product = () => {
  const defaultValues = { ...initialValues };
  const methods = useForm({ resolver: yupResolver(schema), defaultValues });
  const { clearErrors, handleSubmit } = methods;

  const { mutateAsync, isFetching, isError } = useMutation((body) =>
    request("/cadastrarproduto", { method: "POST", body })
  );

  const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(mutateAsync)}>
        <Container maxWidth="md" className={classes.main}>
          <Card sx={{ padding: "2rem" }}>
            <div className={classes.header}>
              <h1>Cadastrar novo produto</h1>
            </div>
            <Grid container spacing={3} width="100%">
              <Grid item xs={12}>
                <TextField fullWidth label="Nome do produto" name="nome" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Preço"
                  name="preco"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display="flex"
                width="100%"
                justifyContent="end"
              >
                <Button
                  sx={{ padding: "1rem 1.5rem" }}
                  variant="contained"
                  size="large"
                  type="submit"
                  onClick={() => clearErrors()}
                  isLoading={isFetching}
                >
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </form>
    </FormProvider>
  );
};

export default Product;
