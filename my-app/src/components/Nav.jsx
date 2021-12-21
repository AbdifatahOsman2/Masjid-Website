import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Divider, List, ListItem, ListItemText, SwipeableDrawer, makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { withTheme } from '@emotion/react';

const useStyles = makeStyles ({
  list: {
    width : 250,
  },
  link: {
    textDecoration: 'none',
   
  },
  image:{
    padding: 5,
    width: 50,
    height: 50,
  }
});

export default function Nav(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  return (
    <nav>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
  
        <Toolbar>


          <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
          anchor='left'
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {}}
          >
          <div className={classes.list}>
          <Box textAlign='center' p={2}>
          Menu
          </Box>
          <Divider/>
          <List>
          {props.user ? (
            <>
  
            <Link to="/event" className={classes.link}>
            <ListItem button onClick={() => {}}>
            <ListItemText primary="Events"/>
            </ListItem>
            </Link>
            
            <Link to="/event-creation" className={classes.link}>
            <ListItem button onClick={() => {}}>
            <ListItemText primary="Create an Event"/>
            </ListItem>
            </Link>

            
            </>
            ):(
              <>
              
              <Link to="/home" className={classes.link}>
              <ListItem button onClick={() => {}}>
              <ListItemText primary="donate"/>
              </ListItem>
              </Link>
              
              <Link to="/madrasah" className={classes.link}>
              <ListItem button onClick={() => {}}>
              <ListItemText primary="Madrasah"/>
              </ListItem>
              </Link>
              
              <Link to="/Login" className={classes.link}>
              <ListItem button onClick={() => {}}>
              <ListItemText primary="Members"/>
              </ListItem>
              </Link>

          </>
          )}
          </List>
          </div>
          </SwipeableDrawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            <Link to='/' id='title' className={classes.link}>
              Masdjid Al-Rahma
              </Link>
          </Typography>
          <Link to='/'>
          <img src={logo} className={classes.image}/>
          </Link>
        
        </Toolbar>
      </AppBar>
    </Box>


    </nav>
  );
}


