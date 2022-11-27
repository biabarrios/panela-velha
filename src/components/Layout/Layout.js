import PropTypes from "prop-types";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import Footer from "../../components/Footer";
import useStyles from "./styles";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <ResponsiveAppBar />
      <div className={classes.children}>{children}</div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};

export default Layout;
