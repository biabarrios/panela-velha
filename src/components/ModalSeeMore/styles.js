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
  };
});

export default useStyles;
