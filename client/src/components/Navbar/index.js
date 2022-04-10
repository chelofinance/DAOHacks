import {ROUTES} from '../../Router';
import { Link, useLocation } from "react-router-dom";

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

import './index.scss'

import {useWallet } from 'use-wallet'
import makeBlockie from 'ethereum-blockies-base64';
// import connect from '@aragon/connect'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LOGO = 'QuickLend';


const Navbar = () => {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  const { pathname } = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [account, setAccount] = React.useState(null);
  const [blockie, setBlockie] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

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

  React.useEffect(() => {
    // Initiates the connection to an organization

    async function fetchData() {
      // You can await here
      // const org = await connect('quicklend.aragonid.eth', 'thegraph', { network: 4 })
      // console.log(org)
      // ...
    }
    if(wallet.status == 'connected') {
      const img = makeBlockie(wallet.account);
      let acc = wallet.account;
      acc = acc.slice(0, 10) + '...' + acc.slice(-7)
      setAccount(acc);
      setBlockie(img);
      setBalance(wallet.balance);
      fetchData();
    }

  }, [wallet.status]);


  const connectWallet = () => {
    wallet.connect();
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: '#1C1924',
      color: '#A6A0BB',
      boxShadow: 'unset',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

					{/* Desktop Logo */}
          <Typography
            className="logo"
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
            className="logo"
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
                className={(k.path === pathname ? 'selected-tab' : '')}
								as={Link}
								to={k.path}
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#A6A0BB', display: 'block', textDecoration: 'none' }}
              >
                {k.title}
              </Button>
            ))}
          </Box>

					{/* Menu Right */}
          <Box sx={{ flexGrow: 0 }}>
            {wallet.status === 'connected' ? (
              <div>
                <Box sx={{display: 'flex', flexDirection: 'row', backgroundColor: '#fff', padding: '12px 16px', borderRadius: '6px', width: '240px'}}>
                  <div>
                    <img src={blockie} style={{width: '24px', height:'24px', borderRadius: '5px', marginRight: '10px'}}/>
                    <div style={{
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '10px',
                      backgroundColor: 'green',
                      marginLeft: '17px',
                      top: '34px',
                      border: '2px solid #fff'
                    }}/>
                  </div>
                  <div>
                    <p style={{margin: '0', fontSize: '14px', marginTop:'-5px'}}>{account}</p>
                    <p style={{margin: '0', fontSize: '10px', color: 'green'}}>Connected to Rinkeby</p>
                  </div>
                </Box>
                {/* <div>Balance: {balance}</div> */}
                {/* <button onClick={() => wallet.reset()}>disconnect</button> */}
              </div>
            ) : (
              <div>
                <Button 
                  className="gradient"
                  sx={{ my: 2 }}
                  onClick={connectWallet}>
                    <span>Connect Wallet</span>
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;