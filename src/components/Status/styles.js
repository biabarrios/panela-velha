import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      width: "100%",
      minHeight: "220px",
      padding: "1rem",
      display: "flex",
      backgroundColor: "#fff",
      borderRadius: "1rem",
      justifyContent: "space-between",
      "& > h3": {
        fontSize: "3rem",
      },
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    value: {
      backgroundColor: "#50A773",
      padding: "0.5rem",
      color: "#fff",
      width: "min-content",
      borderRadius: "0.4rem",
    },
    cardText: {
      "& > h3": {
        fontSize: "1.5rem",
        margin: "0",
        color: "#FF611D",
      },
      "& > p": {
        margin: "0",
        color: "#717171",
      },
    },
    image: {
      minWidth: "45%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPostion: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "1rem",
    },
  };
});

export default useStyles;
