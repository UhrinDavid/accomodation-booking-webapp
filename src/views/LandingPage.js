import React from "react";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { CardMedia, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import image from "assets/images/room/bedroom-490779_640.jpg";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card.js";


const useStyles = makeStyles(styles);

export const LandingPage = (props) => {
    const classes = useStyles();

    const items = Array.apply(null, {length: 10});
    
    return (
      <div className={classes.container}>
          <GridContainer >
              {items.map(() => <GridItem xs={12} sm={6} md={4} >
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            image={image}
                            title="Bedroom"
                        />
                        <CardBody className={classes.cardBody}>
                            <p className={classes.description}>The red glint of paint sparkled under the sun. 
                            He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago. 
                            It was his baby and he spent hours caring for it, pampering it, and fondling over it. 
                            She knew this all too well, and that's exactly why she had taken a sludge hammer to it.</p>
                        </CardBody>
                    </Card>
                </GridItem>)}
          </GridContainer>
      </div>);
}