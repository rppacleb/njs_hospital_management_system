export const useCutomStyles = {
  //BUTTONS ...
  BTNPrimary: {
    background: "#1915AC",
    background:
      "linear-gradient(90deg, rgba(25,21,172,1) 0%, rgba(41,18,173,1) 49%, rgba(61,15,167,1) 100%)",
    color: "#fff",
    borderRadius: "0.25rem",
    padding: "8px 24px",
    boxShadow: "none",
    transition: "all 0.3s",
    "& p": {
      fontWeight: 500,
      fontSize: 14,
    },
  },
  BTNSecondary: {
    bgcolor: "#fff",
    color: "#16171A",
    borderRadius: "0.25rem",
    padding: "8px 24px",
    boxShadow: "none",
    transition: "all 0.3s",
    "&:hover": {
      bgcolor: "#fff",
    },
    "& p": {
      fontWeight: 500,
      transition: "all 0.3s ease",
    },
  },
  INPPrimary: {
    fontSize: 12,
    "& label.Mui-focused": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root": {
      bgcolor: "#fff",
      height: 45,
      borderRadius: 2,
    },
  },
};
