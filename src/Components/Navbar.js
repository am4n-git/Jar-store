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
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MoreIcon from "@mui/icons-material/MoreVert";
import CartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
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
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      dispaly: "none",
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
      [theme.breakpoints.up("md")]: {},
    },
  }));
  return (
    <AppBar position="sticky">
      <Container
        sx={{
          maxWidth: "100% !important",
          backdropFilter: "blur(10px) !important",
        }}
      >
        <Toolbar disableGutters>
          <Link to="/">
            <Typography textAlign="center">BuyJar</Typography>
          </Link>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, alignItems: "center", display: { xs: "flex" } }}
          >
            {isLoggedIn && (
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Avatar
                  sx={{ width: 34, height: 34, mr: 2, bgcolor: green[500] }}
                >
                  AS
                </Avatar>
              </Box>
            )}
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
              <Link to="/account">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
              </Link>
              <Link to="/wishlist">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Wishlist</Typography>
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
                <MenuItem
                  onClick={() => {
                    setIsLoggedIn(false);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
        <Search sx={{ display: { xs: "flex" } }}>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      </Container>
    </AppBar>
  );
}

export default Navbar;
