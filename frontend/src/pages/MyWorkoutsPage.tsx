import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import WorkoutCardComponent from "../components/WorkoutCardComponent";
import { Box, Grid, Typography } from "@mui/material";
import PopUpModal from "../components/PopUpModal";

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface Workout {
  id: string;
  date: string;
  muscleGroup: string;
  exercises: Exercise[];
}
const MyWorkoutsPage = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  // const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    // Mock fetch — replace with your backend call
    const mockData: Workout[] = [
      {
        id: "1",
        date: "03/28/2026",
        muscleGroup: "Chest",
        exercises: [
          { name: "Bench Press", reps: 10, sets: 4 },
          { name: "Incline DB Press", reps: 12, sets: 3 },
        ],
      },
      {
        id: "2",
        date: "03/27/2026",
        muscleGroup: "Back",
        exercises: [
          { name: "Deadlift", reps: 5, sets: 5 },
          { name: "Lat Pulldown", reps: 12, sets: 4 },
        ],
      },
      {
        id: "3",
        date: "03/27/2026",
        muscleGroup: "Legs",
        exercises: [
          { name: "Squats", reps: 5, sets: 5 },
          { name: "RDLs", reps: 12, sets: 4 },
        ],
      },
      {
        id: "4",
        date: "03/27/2026",
        muscleGroup: "Shoulders",
        exercises: [
          { name: "Shoulder Press", reps: 5, sets: 5 },
          { name: "Lat Raises", reps: 12, sets: 4 },
        ],
      },
      {
        id: "5",
        date: "03/27/2026",
        muscleGroup: "Back",
        exercises: [
          { name: "Deadlift", reps: 5, sets: 5 },
          { name: "Lat Pulldown", reps: 12, sets: 4 },
        ],
      },
    ];

    setTimeout(() => {
      setWorkouts(mockData);
    }, 0);
  }, []);

  const buttonAction = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={{paddingTop: "30px"}}>
      <Box>
        <Typography variant="h3" component="h3" sx={{ color: "#daaeee" }}>
          My Workouts
        </Typography>
      </Box>
      {/* Top-left Add Workout button */}
      <Box sx={{ padding: 3, display: "flex", justifyContent: "flex-start" }}>
        <ButtonComponent
          buttonTitle="Add Workout"
          buttonAction={buttonAction}
        />
      </Box>
      {/* {Pop up Modal to show when button is clicked} */}
      <PopUpModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Grid of workouts */}
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3} justifyContent="center">
          {workouts.map((workout) => (
            <Grid key={workout.id}>
              <WorkoutCardComponent
                date={workout.date}
                muscleGroup={workout.muscleGroup}
                exercises={workout.exercises}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default MyWorkoutsPage;
