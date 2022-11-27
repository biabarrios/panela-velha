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
      backgroundColor: "#37B5AA",
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
      backgroundColor: "#982121",
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
      backgroundColor: "#FF611D",
      "&:before": {
        content: '""',
        display: "block",
        width: "32px",
        backgroundImage: "url(./credit-icon.svg)",
        backgroundRepeat: "no-repeat",
      },
    },
  };
});

export default useStyles;
