import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem 1rem",
      gap: "5rem",
      background: "linear-gradient(90deg, #50A773 0.08%, #50C27E 100.08%)",
      borderRadius: "0.5rem",
      "&>p": {
        fontSize: "24px",
        lineHeight: "24px",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
      },
    },
    quantityContainer: {
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&>p": {
        margin: 0,
      },
    },
    quantityValue: {
      fontSize: "1rem",
    },
    quantity: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      "&>button": {
        border: "none",
        color: "#fff",
        backgroundColor: "#4B8F67",
        width: "40px",
        height: "35px",
        borderRadius: ".5rem",
        cursor: "pointer",
        fontSize: "1.5rem",
      },
    },
  };
});

export default useStyles;
