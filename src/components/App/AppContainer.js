import PropTypes from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./theme";

const queryClient = new QueryClient();

function AppContainer({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <Container maxWidth={false} disableGutters>
          {children}
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default AppContainer;
