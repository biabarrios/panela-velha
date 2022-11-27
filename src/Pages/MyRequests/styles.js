import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    main: {
      marginTop: "2rem",
      fontFamily: "Signika",
    },

    header: {
      marginBottom: "2rem",
    },

    emptyData: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "& > h1": {
        color: "#717171",
      },
      "& > a": {
        textDecoration: "none",
      },
      "& > img": {
        width: "20rem",
      },
    },
  };
});

export default useStyles;
