import {ROUTES} from '../../Router';
import {
  Link,
} from "react-router-dom";

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

import {useWallet,  UseWalletProvider } from 'use-wallet'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LOGO = 'QuickLend';

const Navbar = () => {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

					{/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {LOGO}
          </Typography>

					{/* Mobile Menu Left */}
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
              {ROUTES.map((k, i) => (
                <MenuItem key={i} as={Link} to={k.path} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{k.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

					{/* Mobile Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {LOGO}
          </Typography>

					{/* Desktop Menu Left */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {ROUTES.map((k, i) => (
              <Button
								as={Link}
								to={k.path}
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
              >
                {k.title}
              </Button>
            ))}
          </Box>

					{/* Menu Right */}
          <Box sx={{ flexGrow: 0 }}>
            {wallet.status === 'connected' ? (
              <div>
                <div>Account: {wallet.account}</div>
                <div>Balance: {wallet.balance}</div>
                <button onClick={() => wallet.reset()}>disconnect</button>
              </div>
            ) : (
              <div>
                <button onClick={() => wallet.connect()}>Connect Wallet</button>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;