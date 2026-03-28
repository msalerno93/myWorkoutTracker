import Button from "@mui/material/Button";

      {/* re-usable button that pulls in title from other components */}

const ButtonComponent = ({buttonTitle}: {buttonTitle: string}) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#4d2b4a",
          fontWeight: "bold",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#6a3f67", // or whatever hover color you want
          },
        }}
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default ButtonComponent;
