import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./theme";

function AppContainer({ children }) {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        {children}
      </Container>
    </ThemeProvider>
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
