import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: "#982121",
      padding: "2rem 4rem",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > img": {
        marginBottom: "2rem",
      },
    },
    links: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      gap: "1rem",
      "& > a": {
        color: "#CFCFCF",
        "&:hover": {
          color: "#fff",
        },
        textDecoration: "none",
      },
    },
  };
});

export default useStyles;
