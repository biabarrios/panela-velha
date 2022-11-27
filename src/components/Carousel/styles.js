import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    mySwiper: {
      borderRadius: "2rem",

      "& > .swiper-button-next, .swiper-button-prev": {
        color: "#fff",
        fontSize: "50px",
      },

      "& > .swiper-pagination-bullets": {
        "--swiper-theme-color": "#FF9E00",
      },
    },

    swiperSlide: {
      position: "relative",
      display: "flex",
      maxHeight: "400px",
    },

    containerText: {
      zIndex: 10,
      content: "",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
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

    image: {
      width: "50%",
      height: "50%",
      zIndex: "10",
    },

    element: {
      position: "absolute",
    },

    element1: {
      top: "-10px",
      left: "-100px",
    },
    element2: {
      top: "-10px",
      right: "0px",
    },
    element3: {
      bottom: "-10px",
      left: "-200px",
    },
    element4: {
      bottom: "-10px",
      right: "0px",
    },

    text: {
      display: "flex",
      zIndex: 20,

      flexDirection: "column",
      "& > h1": {
        marginBottom: "0",
        fontSize: "3rem",
      },
      "& > h2": {
        marginTop: "0",
        color: "#FF9E00",
        fontSize: "2rem",
      },
    },
  };
});

export default useStyles;
