/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <NavLink  to="/login" 
            className={classes.navLink}
          >
            Log in
          </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
          <NavLink  to="/signup" 
            className={classes.navLink}
          >
            Sign up
          </NavLink>
      </ListItem>
    </List>
  );
}
