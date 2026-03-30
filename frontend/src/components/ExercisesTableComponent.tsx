import {
  Card,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExercisesTableComponent = () => {
  const exercises = [
    { id: 1, name: "Push Ups", muscleGroup: "Chest" },
    { id: 2, name: "Squats", muscleGroup: "Legs" },
    { id: 3, name: "Bicep Curls", muscleGroup: "Arms" },
    { id: 4, name: "Lunges", muscleGroup: "Legs" },
    { id: 5, name: "Plank", muscleGroup: "Core" },
  ];

  const headerFont = {
    color: "white",
    fontWeight: "bold",
    fontSize: "25px",
    paddingTop: "15px",
    paddingBottom: "15px",
  }

  const tableFont = {
    color: "white",
    fontSize: "18px",
    paddingTop: "10px",
    paddingBottom: "10px",
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Card
        sx={{
          width: "50%",
          position: "center",
          alignItems: "center",
          paddingTop: 2,
          backgroundColor: "#6f536d",
        }}
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={headerFont}>
                  <strong>Exercise</strong>
                </TableCell>
                <TableCell align="center" style={headerFont}>
                  <strong>Muscle Group</strong>
                </TableCell>
                <TableCell align="center" style={headerFont}>
                  <strong>Edit/Delete</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {exercises.map((exercise, index) => (
                <TableRow key={index}>
                  <TableCell style={tableFont}>{exercise.name}</TableCell>
                  <TableCell align="center" style={tableFont}>
                    {exercise.muscleGroup}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#4d2b4a",
                        padding: "0px",
                        marginRight: "10px",
                        "&:hover": {
                          backgroundColor: "#6a3f67", // or whatever hover color you want
                        },
                      }}
                    >
                      {<EditIcon fontSize="small" />}
                    </Button>
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ExercisesTableComponent;
