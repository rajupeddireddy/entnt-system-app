import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const pages = ['Dashboard', 'Products', 'Orders', 'Delivery'];

export default function Header() {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', boxShadow: '0px 1px 5px 0px #bfbfbf', color: '#000', paddingTop: '18px', paddingBottom: '12px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingCartCheckoutIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 'bold',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: 1,
              fontStyle: 'italic'

            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 800, backgroundColor: '#ff551d', padding: '0px 0px 0px 5px', fontStyle: 'normal', marginRight: '4px' }}>ENTNT </span> Enterprises
          </Typography>

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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={page === 'Dashboard' ? '/' : `/${page}`}>
                  <Typography textAlign="center" style={{ textTransform: 'initial' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ShoppingCartCheckoutIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              color: 'inherit',
              letterSpacing: '.1rem',
              fontStyle: 'italic',
              textDecoration: 'none',
              lineHeight: 1
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 800, backgroundColor: '#ff551d', padding: '0px 0px 0px 5px', fontStyle: 'normal', marginRight: '4px' }}>ENTNT</span>  Enterprises
          </Typography>
          <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  component={Link}
                  to={page === 'Dashboard' ? '/' : `/${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: 'block',
                    textTransform: 'initial',
                    fontFamily: 'Roboto',
                    fontWeight:  location.pathname === (page === 'Dashboard' ? '/' : `/${page}`) ? 'bold' : 500,
                    color:'#000'
                  }}
                >
                  {page}
                </Button>
              ))}
              <Button
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'initial', fontFamily: 'Roboto', fontWeight: 'bold', borderRadius: '15px', fontSize: '12px', color: '#fff', backgroundColor: '#007bff' }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
