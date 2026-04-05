import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import ExercisesTableComponent from "../components/ExercisesTableComponent";
import { Box, Typography } from "@mui/material";
import PopUpModal from "../components/PopUpModal";

const ExercisesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonAction = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={{ paddingTop: "30px" }}>
      <Box>
        <Typography variant="h3" component="h3" sx={{ color: "#daaeee" }}>
          All Exercises
        </Typography>
      </Box>
      <Box sx={{ padding: 3, display: "flex", justifyContent: "flex-start" }}>
        <ButtonComponent
          buttonTitle="Add Exercise"
          buttonAction={buttonAction}
        />
      </Box>
      <PopUpModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />{" "}
      <ExercisesTableComponent />
    </div>
  );
};

export default ExercisesPage;
