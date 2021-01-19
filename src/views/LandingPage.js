import React, { useEffect, useState } from "react";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { CardMedia, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";
import { getRooms } from "api/apis";
import { NavLink } from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';



const useStyles = makeStyles(styles);

const LandingPage = (props) => {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const { addSnackBar } = props;

    useEffect(() => {
          getRooms().then((response) => {
            setPages(Math.ceil(response.length/itemsPerPage));
            setRooms(response);
          }).catch(error => {
            addSnackBar("Server connection problems","danger");
          });
    },[addSnackBar],);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }
    
    return (
      <div className={classes.container}>
          {rooms.length > 0 && 
          <GridContainer >
              {rooms.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((room) => <GridItem xs={12} sm={6} md={4} key={room.id}>
                    <Card className={classes.card}>
                        <CardMedia square
                            component="img"
                            className={classes.media}
                            image={room.image}
                            title="Bedroom"
                        />
                        <CardBody className={classes.cardBody}>
                            <b>Capacity:</b> {room.capacity}<br/>
                            <b>Price:</b> {room.price}€<br/><br/>
                            {room.description.length > 190 ? `${room.description.slice(0,190)}...` : room.description}
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                            <NavLink to={`roompreview/?roomID=${room.id}`} className={classes.navLink}>
                             <Button default color="primary" size="sm">More</Button>
                            </NavLink>
                        </CardFooter>
                    </Card>
                </GridItem>)}
                <GridItem xs={12}  key="pagination" >
                    <Pagination count={pages} onChange={handlePageChange} className={classes.pagination}/>
                </GridItem>
          </GridContainer>}
          
      </div>);
}

export default LandingPage;