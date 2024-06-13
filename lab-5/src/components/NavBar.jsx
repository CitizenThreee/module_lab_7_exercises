import { CssBaseline, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
  
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NavBar({title}) {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="sticky" open={open}>
              <Toolbar>
                  <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2, ...(open && { display: 'none' }) }} onClick={handleDrawerOpen}>
                      <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      {title}
                  </Typography>
                  <Button color="inherit" onClick={() => {navigate('/login')}}>Logout</Button>
              </Toolbar>
          </AppBar>
          <Drawer sx={{
              width: drawerWidth, flexShrink: 0,
              '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', }, }}
              variant="persistent" anchor="left" open={open} >
              <DrawerHeader>
                  <IconButton onClick={handleDrawerClose}>
                      <ChevronLeftIcon />
                  </IconButton>
              </DrawerHeader>
            <Divider/>
            <Button onClick={() => {navigate('/')}}>Home</Button>
            <Button onClick={() => {navigate('/bitcoin-rates')}}>Bitcoin Rates</Button>
          </Drawer>
          
      </Box>
  );
}