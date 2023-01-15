import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";
import { useDarkMode } from "../Context/theme-context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Navbar() {
  const { items } = useCart();
  const { changeTheme } = useDarkMode();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Search Input Bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    // <nav className="navbar">
    //   <div className="navbar-content">
    //     <Link to="/">Home</Link>
    //     <ul className="navbar-items">
    //       <li>
    //         <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/login">
    //           Login
    //         </Link>
    //       </li>

    //       <li>
    //         <Link className="nav-list bg-sky-500 hover:bg-sky-700" to="/cart">
    //           Cart <span>{items} </span>qty
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography textAlign="center">BuyJar</Typography>
          </Link>

          {/* MOBILE VIEW */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* Hamburger Menu */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Search sx={{ display: { xs: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
          </Box>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, alignItems: "center", display: { xs: "flex" } }}
          >
            <Box sx={{ display: { md: "flex" } }}>
              <Link to="/cart">
                <Badge badgeContent={items} color="error">
                  <CartIcon />
                </Badge>
              </Link>
              <Badge badgeContent={5} sx={{}} color="error">
                <NotificationsIcon />
              </Badge>
            </Box>

            <MoreIcon
              onClick={handleOpenUserMenu}
              sx={{ display: {}, pl: 3 }}
            ></MoreIcon>
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
              <Link to="/login">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </Link>
              <MenuItem>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  changeTheme();
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">Change Theme</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">LogOut</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
