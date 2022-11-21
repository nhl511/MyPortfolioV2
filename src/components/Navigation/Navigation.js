import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About me', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
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
    <AppBar position="absolute" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            fstackdev
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none' },
              }}
            >
              <Link to="/" style={{color:'black', textDecoration:'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                </Link>
                <Link to="/About" style={{color:'black', textDecoration:'none'}} >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About me</Typography>
                </MenuItem>
                </Link>
                <Link to="/Project" style={{color:'black', textDecoration:'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">My Projects</Typography>
                </MenuItem>
                </Link>
                <Link to="/Contact" style={{color:'black', textDecoration:'none'}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                </Link>
                </Menu>
          </Box>
          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            fstackdev
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
<Link to="/" style={{color:'black', textDecoration:'none'}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"900" }}
              >
                Home
              </Button>
              </Link>
              <Link to="/About" style={{color:'black', textDecoration:'none'}}>          
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"900" }}
              >
                About me
              </Button>
              </Link>
              <Link to="/Project" style={{color:'black', textDecoration:'none'}}>          
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"900" }}
              >
                My Projects
              </Button>
              </Link>
              <Link to="/Contact" style={{color:'black', textDecoration:'none'}}>          
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight:"900" }}
              >
                Contact
              </Button>
            </Link>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
