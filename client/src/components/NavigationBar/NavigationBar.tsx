import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FlightIcon from '@mui/icons-material/Flight';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import './NavigationBar.css';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ContentPage from '../../ContentPage';

interface NavigationBarProps {
  setContentPage: (page: ContentPage) => void;
}

const NavigationBar: FC<NavigationBarProps> = (props) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const onClickLogin = () => {
    alert('This will eventually do login.');
  }

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  }

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        <ListItem key='Airplanes' disablePadding>
          <ListItemButton onClick={() => props.setContentPage('Airplanes')}>
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary={'Airplanes'} />
          </ListItemButton>
        </ListItem>
        <ListItem key='Settings' disablePadding>
          <ListItemButton onClick={() => props.setContentPage('Settings')}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Settings'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => toggleDrawer(!drawerOpen)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AvgasShare
          </Typography>
          <Button onClick={onClickLogin} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={onCloseDrawer}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default NavigationBar;
