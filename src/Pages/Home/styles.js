import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    main: {
      marginTop: "2rem",
      fontFamily: "Signika",
    },

    section: {
      margin: "5rem 0",
      "& > h2": {
        fontSize: "2rem",
      },
    },

    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&>button": {
        height: "min-content !important",
      },
    },

    sectionCards: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      gap: "1rem",
    },

    card: {
      width: "32.5%",
    },
  };
});

export default useStyles;
