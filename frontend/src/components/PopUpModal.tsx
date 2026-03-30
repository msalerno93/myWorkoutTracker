import React from "react";
import { Box, Modal, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface PopUpModalProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
};

const PopUpModal: React.FC<PopUpModalProps> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "red", fontWeight:"bold" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Centered text */}
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Hello
        </Typography>

        {/* Bottom buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              backgroundColor: "#d50000",
              "&:hover": {
                backgroundColor: "#ef1d1d", // or whatever hover color you want
              },
              color: "white",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4d2b4a",
              "&:hover": {
                backgroundColor: "#6a3f67", // or whatever hover color you want
              },
              color: "white",
              fontWeight: "bold",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopUpModal;
