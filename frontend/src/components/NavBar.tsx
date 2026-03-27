import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, type SetStateAction } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event: { currentTarget: SetStateAction<null>; }) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const navButtonStyle = {
    color: "#daaeee",
    fontWeight: 800,
    fontSize: "1.05rem",
  };

  const titleButtonStyle = {
    fontWeight: 800,
    color: "#daaeee",
    fontSize: "1.8rem",
    letterSpacing: "1px",
    fontFamily: "Poppins, sans-serif",
    textTransform: "none",
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #565055, #4d2b4a)",
        fontFamily: "Poppins, sans-serif",
        boxShadow: "0 4px 12px rgba(88, 88, 88, 0.15)",
      }}
    >
      <Toolbar>
        {/* Mobile Menu Button */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"} }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: "#daaeee" }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
              Home
            </MenuItem>

            <MenuItem
              component={Link}
              to="/myworkouts"
              onClick={handleCloseNavMenu}
            >
              My Workouts
            </MenuItem>
            <MenuItem
              component={Link}
              to="/exercises"
              onClick={handleCloseNavMenu}
            >
              Exercises
            </MenuItem>
          </Menu>
        </Box>

        {/* Logo / Title */}
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Button component={Link} to="/" style={titleButtonStyle}>
            📝 Workout Tracker
          </Button>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" style={navButtonStyle}>
            Home
          </Button>

          <Button component={Link} to="/myworkouts" style={navButtonStyle}>
            My Workouts
          </Button>

          <Button component={Link} to="/exercises" style={navButtonStyle}>
            Exercises
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
