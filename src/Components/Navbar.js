import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";
import { useDarkMode } from "../Context/theme-context";
import { useAuth } from "../Context/auth-context";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
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
  const { cart } = useCart();
  const { changeTheme } = useDarkMode();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
    width: "10%",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
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
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton aria-label="Home Page" color="red">
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography textAlign="center">BuyJar</Typography>
            </IconButton>
          </Link>
          <Search sx={{ display: { xs: "flex" } }}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, alignItems: "center", display: { xs: "flex" } }}
          >
            <Box sx={{ display: { md: "flex" } }}>
              <Link to="/cart">
                <IconButton
                  size="large"
                  aria-label="display more actions"
                  color="white"
                >
                  <Badge badgeContent={cart.items.length} color="error">
                    <CartIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                size="large"
                aria-label="display more actions"
                color="white"
              >
                <Badge badgeContent={5} sx={{}} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <IconButton
              size="large"
              aria-label="display more actions"
              edge="end"
              color="white"
              onClick={handleOpenUserMenu}
            >
              <MoreIcon></MoreIcon>
            </IconButton>
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
              <Link to="/account">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  changeTheme();
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">Change Theme</Typography>
              </MenuItem>
              {!isLoggedIn ? (
                <Link to="/login">
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Log in</Typography>
                  </MenuItem>
                </Link>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <span
                      onClick={() => {
                        setIsLoggedIn(false);
                      }}
                    >
                      Log out
                    </span>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
