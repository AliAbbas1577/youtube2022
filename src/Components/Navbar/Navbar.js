import React, { useContext } from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const {user} = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TicketGoose
          </Typography>
        { user ?"Hi! "+user.username.toUpperCase()
        :( <div>
         <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
          </div>)}
        </Toolbar>
      </AppBar>
    </Box>

    // <div className="navbar">
    //     <div className="navbarcontainer">
    //         <span className="navItems">

    //         </span>
    //         <div className="navItems">
    //             <button className='navButton'>Register</button>
    //             <button className='navButton'>Login</button>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Navbar;
