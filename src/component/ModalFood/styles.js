import { makeStyles, darken, lighten } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => {
  return {
    dialogTitle: {
      position: "relative",
      background: "linear-gradient(90deg, #982121 0%, #813531 100%)",
      padding: "1rem",
      "& > h2": {
        color: "#fff",
        position: "relative",
        zIndex: 99,
      },
    },
    cardContainerImage: {
      width: "100%",
      height: "250px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    dialogContent: {
      width: "32.5%",
      backgroundColor: "#EAEAEA",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "1rem",
    },
    card: {
      width: "calc(50% - 1rem)",
    },
    element: {
      position: "absolute",
    },
    element3: {
      bottom: "0px",
      left: "0px",
    },
    element4: {
      bottom: "0px",
      right: "0px",
    },
    content: {
      padding: "1rem",
      "&>h2": {
        fontSize: "2rem",
        color: "#FF611D",
      },
      "&>p": {
        color: "#717171",
      },
    },
    quantityServing: {
      margin: "1rem 0",
      padding: "0.5rem",
      backgroundColor: "#FF9E00",
      width: "max-content",
      borderRadius: "0.5rem",
      "&>p": {
        color: "#fff",
        margin: 0,
      },
    },
    button: {
      fontFamily: "Signika",
      width: "100%",
      background: "linear-gradient(90deg, #982121 0.08%, #813531 100.08%)",
      border: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#fff",
      padding: "2rem 1rem",
      borderRadius: "0.5rem",
      fontSize: "1.5rem",
      transition: "ease 1s",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#813531",
      },
    },
    closeButton: {
      position: "absolute",
      right: "1rem",
      top: "1rem",
      display: "flex",
      alignItems: "center",
      border: 0,
      backgroundColor: "#fff",
      padding: ".7rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#EBEBEB",
      },
    },
    contentText: {
      fontFamily: "Signika",
      "&>h2": {
        fontSize: "2rem",
        margin: 0,
        color: "#FF611D",
      },
      "&>p": {
        color: "#717171",
        margin: 0,
      },
    },
  };
});

export default useStyles;
