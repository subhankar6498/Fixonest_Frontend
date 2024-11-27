import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthSlice";
import Swal from "sweetalert2";
import { ImageUrl } from "../Api/AxiosInstance/ImageUrl";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //for logout
  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      icon: "success",
      text: "Logged Out Successfully",
    });
  };

  const DrawerList = (
    <Box
      sx={{ width: 350, backgroundColor: "black", color: "white" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="logo text-center mt-2 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Link to="/">
                <div className="logodiv">
                  <span className="logospan">Fix</span>
                  <img src="/img/logo.png" alt="" height={50} />
                  <span className="logospan">Nest</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ul className="text-center">
        <li>
          <i className="fa fa-map-marker"></i> <span>123, New York, USA</span>
        </li>
        <li>
          <i className="fa fa-phone"></i> +91-7980567320
        </li>
      </ul>
      <List>
        <Link to="/" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/services" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/team" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Team" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/testimonials" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Testimonials" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contact" className="text-white">
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider variant="middle" sx={{ backgroundColor: "#ccc" }} />
      <List>
        {!isLoggedIn ? (
          <Link to="/login" className="text-white">
            <ListItem>
              <ListItemButton>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </Link>
        ) : (
          <>
            <Link to="/profile" className="text-white">
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/password/update" className="text-white">
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Update Password" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/login">
              <ListItem className="text-white">
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Log out" />
                </ListItemButton>
              </ListItem>
            </Link>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <header className="header-section">
        <div className="ht-options">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="logo">
                  <Link to="/">
                    <div className="logodiv">
                      <span className="logospan">Fix</span>
                      <img src="/img/logo.png" alt="" height={50} />
                      <span className="logospan">Nest</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="ht-widget">
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>{" "}
                      <span>123, New York, USA</span>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i> +91-7980567320
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-options">
          <div className="container">
            <div className="humberger-menu">
              <Button
                sx={{ color: "white", padding: 0 }}
                onClick={toggleDrawer(true)}
              >
                <i className="fa fa-bars"></i>
              </Button>
            </div>

            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>

            {isLoggedIn ? (
              <li className="nav-avatar">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="A"
                      src={`${ImageUrl}/${
                        JSON.parse(localStorage.getItem("user")).profileImage
                      }`}
                    ></Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link to="/profile">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" variant="subtitle1">
                        Profile
                      </Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem>
                    <Link to="/password/update">
                      <Typography textAlign="center" variant="subtitle1">
                        Update Password
                      </Typography>
                    </Link>
                  </MenuItem>
                  <Link to="/login">
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center" variant="subtitle1">
                        Log out
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </li>
            ) : (
              <Link to="/login">
                <li className="nav-search">
                  <i className="fa fa-sign-out"></i> Login
                </li>
              </Link>
            )}

            <div className="nav-menu">
              <ul>
                <li className="active">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <span>Service</span>
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <span>Team</span>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials">
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
