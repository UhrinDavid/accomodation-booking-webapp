import React from "react";
import styles from "assets/jss/material-kit-react/views/roomPreview.js";
import { List, ListItem, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import image from "assets/images/room/bedroom-490779_640.jpg"

const useStyles = makeStyles(styles);

export const RoomPreview = (props) => {
    const classes = useStyles();
    
    return (<div>
      <div className={classes.container}>
          <GridContainer justify="center">
              <h3>Hotel Paradise, 2-bed room</h3>>
            <GridItem xs={12} sm={8} md={8}>
              <img src={image} alt="Bedroom" className={classes.image}></img>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <List className={classes.c}>
                <ListItem className={classes.specificationItem}>
                  <p><b>Room type: </b>double single</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p><b>Number of beds: </b>2</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p><b>Room size: </b>23m<sup>2</sup></p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p><b>Minimal price (1 night): </b>56<b>&euro;</b></p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p><b>Balcony</b></p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p><b>Toilet &amp; shower</b></p>
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p>The young man wanted a role model. 
                He looked long and hard in his youth, but that role model never materialized. 
                His only choice was to embrace all the people in his life he didn't want to be like.</p>
            </GridItem>
          </GridContainer>
      </div>
    </div>);
}