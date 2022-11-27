import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    containerRequest: {
      display: "flex",
      gap: "2rem",
      marginBottom: "2rem",
    },
    containerImage: {
      width: "40%",
      backgroundSize: "cover",
      backgroundPostion: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "1rem",
    },
    adress: {
      color: "#717171",
    },
    card: {
      width: "100%",
      minHeight: "220px",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      borderRadius: "1rem",
      gap: "1rem",
      "& > h3": {
        fontSize: "3rem",
      },
      "& > p, small": {
        color: "#717171",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      "& > div > h3": {
        fontSize: "2rem",
        margin: 0,
        color: "#FF611D",
      },
      "& > div > p": {
        margin: 0,
        color: "#717171",
      },
    },
    containerStatus: {
      "& > h3": {
        fontSize: "1rem",
        color: "#3E3E3E",
      },
    },
    containerFooter: {
      display: "flex",
      justifyContent: "space-between",
      "& > div > h3": {
        marginTop: 0,
        color: "#3E3E3E",
      },
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
