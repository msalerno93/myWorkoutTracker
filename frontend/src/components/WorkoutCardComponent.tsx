import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Exercise {
  name: string;
  reps: number;
  sets: number;
}

interface WorkoutCardProps {
  date: string;
  muscleGroup: string;
  exercises: Exercise[];
}

const textColor = "white";

const WorkoutCardComponent: React.FC<WorkoutCardProps> = ({
  date,
  muscleGroup,
  exercises,
}) => {
  return (
    <Card
      sx={{
        width: 350,
        position: "relative",
        paddingTop: 2,
        backgroundColor: "#6f536d",
      }}
    >
      {/* Date in upper right */}
      <Box sx={{ position: "absolute", top: 8, right: 12 }}>
        <Typography variant="caption" color={textColor}>
          {date}
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", top:4, left: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d50000",
            padding: "0px",
            "&:hover": {
              backgroundColor: "#ef1d1d", // or whatever hover color you want
            },
          }}
        >
          {<DeleteIcon fontSize="small" />}
        </Button>
      </Box>
      <Box sx={{ position: "absolute", top:4, left: 80 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4d2b4a",
            padding: "0px",
            "&:hover": {
              backgroundColor: "#6a3f67", // or whatever hover color you want
            },
          }}
        >
          {<EditIcon fontSize="small" />}
        </Button>
      </Box>
      {/* Centered Muscle Group Header */}
      <CardHeader sx={{paddingTop: "20px"}}
        title={
          <Typography color={textColor} variant="h5" align="center" >
            {muscleGroup}
          </Typography>
        }
      />

      <CardContent sx={{paddingTop: "0px"}}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: textColor }}>
                  <strong>Exercise</strong>
                </TableCell>
                <TableCell align="center" sx={{ color: textColor }}>
                  <strong>Reps</strong>
                </TableCell>
                <TableCell align="center" sx={{ color: textColor }}>
                  <strong>Sets</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {exercises.map((exercise, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: textColor }}>
                    {exercise.name}
                  </TableCell>
                  <TableCell align="center" sx={{ color: textColor }}>
                    {exercise.reps}
                  </TableCell>
                  <TableCell align="center" sx={{ color: textColor }}>
                    {exercise.sets}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default WorkoutCardComponent;
