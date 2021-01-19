/*eslint-disable*/
import React, { useState } from "react";
// react components for routing our app without refresh
import {  NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { loggedIn } from "components/globalFuncs";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router-dom';
import { deleteCookie } from "components/globalFuncs";
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const classes = useStyles();
  const {isLoggedIn, setIsLoggedIn} = props;

  props.history.listen((location, action) => {
    setIsLoggedIn(loggedIn());
  });

  const handleLogout = () => {
    deleteCookie("refresh");
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <NavLink  to="/reviews" 
            className={classes.navLink}
          >
            <StarBorderIcon className={classes.icon}/>
            Reviews
          </NavLink>
      </ListItem>
      {!isLoggedIn && <ListItem className={classes.listItem}>
          <NavLink  to="/login" 
            className={classes.navLink}
          >
            Log in
          </NavLink>
      </ListItem>}
      {!isLoggedIn && <ListItem className={classes.listItem}>
          <NavLink  to="/signup" 
            className={classes.navLink}
          >
            Sign up
          </NavLink>
      </ListItem>}
      {isLoggedIn && <ListItem className={classes.listItem}>
          <NavLink  to="/reservations" 
            className={classes.navLink}
          >
            <AccountCircleIcon className={classes.icon}/>
            Reservations
          </NavLink>
      </ListItem>}
      {isLoggedIn && <ListItem className={classes.listItem}>
          <NavLink  to="/" onClick={handleLogout}
            className={classes.navLink}
          >
            <ExitToAppIcon className={classes.icon}/>
            Log out
          </NavLink>
      </ListItem>}
    </List>
  );
}

export default withRouter(HeaderLinks);
