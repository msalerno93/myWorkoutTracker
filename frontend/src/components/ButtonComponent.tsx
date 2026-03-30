import Button from "@mui/material/Button";

{
  /* re-usable button that pulls in title from other components */
}

interface ButtonComponentProps {
  buttonTitle: string;
  buttonAction: () => void;
}

const ButtonComponent = (
  { buttonTitle, buttonAction }: ButtonComponentProps
) => {
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
        onClick={buttonAction}
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default ButtonComponent;
