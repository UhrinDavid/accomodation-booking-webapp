import React from "react";
import styles from "assets/jss/material-kit-react/views/roomPreview.js";
import { List, ListItem, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import image from "assets/images/room/bedroom-490779_640.jpg"

const useStyles = makeStyles(styles);

export const RoomPreview = (props) => {
    const classes = useStyles();
    
    return (
      <div className={classes.container}>
          <GridContainer >
            <GridItem xs={12} sm={12} md={12}>
              <h3 className={classes.heading}>Hotel Paradise, 2-bed room</h3>
            </GridItem>
          
            <GridItem xs={12} sm={8} md={6}>
              <img src={image} alt="Bedroom" className={classes.image}></img>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <List className={classes.c}>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Room type: </b>2x single bed</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Number of beds: </b>2</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Room size: </b>23m<sup>2</sup></p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Minimal price (1 night): </b>56&euro;</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Balcony</b></p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Toilet &amp; shower</b></p>
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <p className={classes.textDescription}>The young man wanted a role model. 
                He looked long and hard in his youth, but that role model never materialized. 
                His only choice was to embrace all the people in his life he didn't want to be like.</p>
              <p className={classes.textDescription}>It had been her dream for years but Dana had failed to take any action toward making it come true. 
                  There had always been a good excuse to delay or prioritize another project. 
                  As she woke, she realized she was once again at a crossroads. 
                  Would it be another excuse or would she finally find the courage to pursue her dream? 
                  Dana rose and took her first step.</p>
              <p className={classes.textDescription}>Don't be scared. The things out there that are unknown aren't scary in themselves. 
                They are just unknown at the moment. Take the time to know them before you list them as scary. 
                Then the world will be a much less scary place for you.</p>
            </GridItem>
          </GridContainer>
      </div>);
}