import React from "react";
import { Button } from "@mui/material";
import  LoginIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/LoginRounded"
import Primary from "@mui/icons-material/StayPrimaryLandscapeRounded"
import Secondary from "@mui/icons-material/StayPrimaryPortrait"
import Layout from "./pages/Layout";
// import Toolbar from "@material-ui/core/Toolbar";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(3),
//   },
// }));
const Navbar = () => {
  return (
    <div >
      <Button variant="contained">Hello World</Button>
      <Button startIcon={<LoginIcon/>} color="primary" variant="contained">Login</Button>
      <Button endIcon={<LogoutIcon/>} variant="contained">Logout</Button>
      <Button >{<Primary></Primary>}</Button>
      <Layout />
    </div>
  );
};

export default Navbar;
