import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const NOME_USUARIO = "Bianca Barrios";
const settings = ["Sair"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage:
          "background-image: linear-gradient(to right, #982121, #932725, #8d2d29, #87312d, #813531);",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <img src="/logo.svg" alt="Logo Panela Velha" />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
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
              <Link to="/">
                <MenuItem onClick={() => {}}>
                  <Typography textAlign="center">Cardápio</Typography>
                </MenuItem>
              </Link>
              <Link to="/meus-pedidos">
                <MenuItem onClick={() => {}}>
                  <Typography textAlign="center">Meus pedidos</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src="/icon-logo-small.svg" alt="Logo Panela Velha" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", alignItems: "center", gap: 5 },
              "&>a": {
                textDecoration: "none",
              },
            }}
          >
            <Link to="/">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Cardápio
              </Button>
            </Link>
            <Link to="/meus-pedidos">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                Meus pedidos
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir opções">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#FF611D",
                    color: "#fff",
                  }}
                >
                  <AccountCircleIcon fontSize="medium" />
                  <Typography
                    variant="subtitle2"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    {NOME_USUARIO}
                  </Typography>
                </Box>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "3rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
