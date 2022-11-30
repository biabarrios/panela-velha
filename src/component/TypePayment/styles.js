import { makeStyles, darken, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      padding: "1rem 1.2rem",
      width: "max-content",
      borderRadius: "0.5rem",
      "& > p": {
        fontSize: "1rem",
        color: "#fff",
        margin: 0,
      },
    },
    pix: {
      display: "flex",
      "&:before": {
        content: '""',
        display: "block",
        width: "32px",
        backgroundImage: "url(./pix-icon.svg)",
        backgroundRepeat: "no-repeat",
      },
    },
    debit: {
      display: "flex",
      "&:before": {
        content: '""',
        display: "block",
        width: "32px",
        backgroundImage: "url(./credit-icon.svg)",
        backgroundRepeat: "no-repeat",
      },
    },
    credit: {
      display: "flex",
      "&:before": {
        content: '""',
        display: "block",
        width: "32px",
        backgroundImage: "url(./credit-icon.svg)",
        backgroundRepeat: "no-repeat",
      },
    },
    notSelected: {
      backgroundColor: "#959595 !important",
      color: "#fff",
    },
    colorPix: {
      backgroundColor: "#37B5AA",
    },
    colorDebit: {
      backgroundColor: "#982121",
    },
    colorCredit: {
      backgroundColor: "#FF611D",
    },
  };
});

export default useStyles;
