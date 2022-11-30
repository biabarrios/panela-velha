import useStyles from "./styles";
import { Fragment, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Grid,
  Container,
  InputAdornment,
  Card,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TableRow,
  TableSortLabel,
  Tooltip,
  TablePagination,
  TableHead,
  IconButton,
  Box,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../../util/request";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const schema = yup.object({
  nome: yup.string().required("O nome do produto é obrigatório"),
  preco: yup.string().required("O preço é obrigatória"),
});

const initialValues = {
  nome: "",
  preco: "",
};

const Product = () => {
  const xsBreakpoint = useMediaQuery("(max-width: 600px)");
  const smBreakpoint = useMediaQuery("(max-width: 960px)");

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // valor padrão
  const [modalIsOpenRegistration, setIsOpenRegistration] = useState(null);
  const [item, setItem] = useState(null);

  const filteredData = useMemo(() => {
    return data.filter((itemObject) => {
      const arrayOfItems = Object.entries(itemObject);
      const haveTheItem = arrayOfItems.some((itemArray) =>
        itemArray[1].toString().toLowerCase().includes(search.toLowerCase())
      );
      return haveTheItem;
    });
  }, [data, search]);

  const defaultValues = { ...initialValues };
  const methods = useForm({ resolver: yupResolver(schema), defaultValues });
  const { clearErrors, handleSubmit } = methods;

  const {
    mutateAsync,
    isFetching,
    isError,
    isLoading,
    isSuccess: sucessPost,
  } = useMutation((body) =>
    request("/cadastrarproduto", { method: "POST", body })
  );

  const {
    mutate,
    isLoading: loadingdelete,
    isSuccess,
    isError: errordelete,
  } = useMutation((idProduto) =>
    request(`/deleteproduto/${idProduto}`, { method: "DELETE" })
  );

  const { data: data2 = [], refetch } = useQuery(
    ["listarProduto"],
    () =>
      request(`/consultarproduto`, {
        method: "GET",
      }),
    { enabled: true, retry: false }
  );

  useEffect(() => {
    refetch();
  }, [isSuccess, sucessPost]);

  const classes = useStyles();
  return (
    <Fragment>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(mutateAsync)}>
          <Container maxWidth="lg" className={classes.main}>
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
      <Container maxWidth="lg" className={classes.main}>
        <Card>
          <div className={classes.header}>
            <h1>Produtos cadastrados</h1>
          </div>
          <TableContainer>
            <Table style={{ minWidth: "60rem" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ flex: 2 }} />

                  <TableCell>
                    <TableSortLabel>Nome do produto</TableSortLabel>
                  </TableCell>

                  <TableCell>
                    <TableSortLabel>Preço</TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data2.length > 0 ? (
                  data2
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((data, index) => (
                      <TableRow>
                        <TableCell style={{ flex: 2 }}>
                          <Tooltip title="Editar">
                            <IconButton
                              style={{ padding: "0.25rem" }}
                              onClick={() => navigate("/", { state: d })}
                              disabled={isLoading}
                            >
                              <EditIcon
                                {...(!isLoading && { color: "info" })}
                              />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Excluir">
                            <IconButton
                              style={{ padding: "0.25rem" }}
                              onClick={() => mutate(data.idProduto)}
                              disabled={loadingdelete}
                            >
                              <Delete
                                {...(!loadingdelete && { color: "error" })}
                              />
                            </IconButton>
                          </Tooltip>
                        </TableCell>

                        <TableCell>{data.nomeProduto}</TableCell>
                        <TableCell>
                          {data.precoProduto.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                      margin: "0.5rem 0",
                      padding: "2rem 0",
                      background: "#fff",
                    }}
                  >
                    <TableCell style={{ textAlign: "center" }}>
                      Desculpe, não há nenhum dado disponível
                    </TableCell>
                  </div>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            display="flex"
            alignItems="center"
            justifyContent={xsBreakpoint ? "center" : "space-between"}
            p="0 0.25rem"
            flexWrap="wrap"
          >
            {!smBreakpoint && (
              <span style={{ display: "block", minWidth: "9rem" }} />
            )}

            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "Todos", value: -1 }]}
              component="div"
              count={filteredData.length}
              style={{ display: "block" }}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => {
                setPage(newPage);
              }}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              labelRowsPerPage={smBreakpoint ? "" : "Linhas por página:"}
              labelDisplayedRows={({ from, to, count }) =>
                smBreakpoint
                  ? xsBreakpoint
                    ? `${count} itens`
                    : ""
                  : `${from}-${to} linhas de ${count}`
              }
            />
          </Box>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Product;
