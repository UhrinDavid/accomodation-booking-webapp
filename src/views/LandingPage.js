import React from "react";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { CardMedia, InputAdornment, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import image from "assets/images/room/bedroom-490779_640.jpg";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card.js";
import SearchIcon from '@material-ui/icons/Search';
import CustomInput from "components/CustomInput/CustomInput";


const useStyles = makeStyles(styles);

export const LandingPage = (props) => {
    const classes = useStyles();

    const items = Array.apply(null, {length: 10});
    
    return (
      <div className={classes.container}>
          <GridContainer className={classes.topBar}>
            <GridItem xs={12} sm={6} md={4} >
                <CustomInput
                    className={classes.search}
                    labelText="Search"
                    id="search"
                    inputProps={{
                    type: "text",
                    endAdornment: (
                        <InputAdornment position="end">
                        <SearchIcon  />
                        </InputAdornment>
                    )
                    }}
                />
            </GridItem>
          </GridContainer>
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
                            <p className={classes.description}>All he could think about was how it would all end. 
                                There was still a bit of uncertainty in the equation, 
                                but the basics were there for anyone to see. 
                                No matter how much he tried to see the positive, it wasn't anywhere to be seen. 
                                The end was coming and it wasn't going to be pretty.</p>
                        </CardBody>
                    </Card>
                </GridItem>)}
          </GridContainer>
      </div>);
}