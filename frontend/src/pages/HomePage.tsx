import { Typography, Box, Button } from "@mui/material";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        minHeight="30vh"
      >
              {/* Heading box */}
        <Box sx={{ paddingBottom: "40px" }}>
          <Typography variant="h3" component="h3" sx={{ color: "#daaeee" }}>
            Welcome to Workout Tracker!
          </Typography>
        </Box>
      </Box>
      {/* Add workout button - will pull up modal to add workout*/}
      <Box>
        <ButtonComponent buttonTitle="Add Workout" />
      </Box>
      {/* View All Workouts Box - uses Link within Button */}
      <Box sx={{ marginTop: "30px" }}>
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
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/myworkouts"
          >
            View My Workouts
          </Link>
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;
