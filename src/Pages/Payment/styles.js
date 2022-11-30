import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    main: {
      marginTop: "2rem",
      fontFamily: "Signika",
      gap: "1rem",
    },

    containerFood: {
      backgroundColor: "#fff",
      flex: "1",
      padding: "2rem",
      borderRadius: "1rem",
      "& > p": {
        margin: 0,
        color: "#717171",
      },
    },

    containerImage: {
      display: "flex",
      flex: "1",
      gap: "1rem",
      flexDirection: "column",
    },

    image: {
      flex: "2",
      borderRadius: "1rem",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    containerImageAd: {
      flex: "1",
      borderRadius: "1rem",
      position: "relative",
      display: "flex",
    },

    containerText: {
      zIndex: 10,
      content: "",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      borderRadius: "1rem",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0) 34.38%, #982121 45.47%)",
    },

    contentText: {
      position: "relative",
      zIndex: 20,
      width: "100%",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    imageAd: {
      width: "50%",
      height: "100%",
      borderRadius: "1rem",
      zIndex: "10",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    element: {
      position: "absolute",
    },

    element1: {
      top: "0px",
      left: "-100px",
    },
    element3: {
      bottom: "0px",
      left: "-200px",
    },

    text: {
      display: "flex",
      zIndex: 20,

      flexDirection: "column",
      "& > h1": {
        margin: "0",
        fontSize: "2rem",
      },
      "& > h2": {
        margin: "0",
        color: "#FF9E00",
        fontSize: "1.5rem",
      },
    },
    modal: {
      "& > div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      },
      "& > div > h1": {
        color: "#3E3E3E",
        margin: 0,
        fontFamily: "Signika",
      },
      "& > div > p": {
        fontFamily: "Signika",
        color: "#717171",
      },
    },
    header: {
      "& > div > h1": {
        margin: 0,
        color: "#FF611D",
        fontSize: "2rem",
      },
      "& > div > p": {
        margin: 0,
        marginBottom: "1rem",
        color: "#717171",
      },
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
  };
});

export default useStyles;
