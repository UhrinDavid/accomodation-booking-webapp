import React, { useEffect, useState } from "react";
import styles from "assets/jss/material-kit-react/views/reviews.js";
import {  Input, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, TextareaAutosize, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Pagination from '@material-ui/lab/Pagination';
import { getReviews } from "api/apis";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { addReview } from "api/apis";
import { refreshToken } from "api/apis";
import StyledButton from "components/CustomButtons/Button.js"



const useStyles = makeStyles(styles);

const Reviews = (props) => {
    const classes = useStyles();
    const [reviews, setReviews] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const [note, setNote] = useState("");
    const [stars, setStars] = useState(0);
    const [openErrorStarLabel, setOpenErrorStarLabel] = useState(false);

    const { addSnackBar, isLoggedIn, setAccessToken, accessToken } = props;

    useEffect(() => {
          getReviews().then((response) => {
            setPages(Math.ceil(response.length/itemsPerPage));
            setReviews(response);
          }).catch(error => {
            addSnackBar("Server connection problems","danger");
          });
    },[addSnackBar],);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    const mapStars = (numberFilled) => {
        let starArray = [];
        let i;
        for (i = 0; i < 5; i++) {
            starArray.push(i < numberFilled ? <StarIcon className={classes.filledStar}/> : <StarBorderIcon className={classes.outlinedStar}/>);
        }
        return (<div>
            {starArray}
        </div>);
    }

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (stars >= 1 && stars <= 5) {
            refreshToken().then (response => {
                setAccessToken(response.access);
                addReview({
                    note: note,
                    stars: stars
                }, response.access).then(responseAdd => {
                    window.location.reload();
                }).catch (error => {
                    console.log(error);
                })
            });
        }
        
    }

    const handleStarChange = (e) => {
        setStars(e.target.value);
        if (e.target.value < 1 || e.target.value > 5) {
            setOpenErrorStarLabel(true);
        } else {
            setOpenErrorStarLabel(false);
        }
    }

    
    return (
      <List className={classes.container} >
          {isLoggedIn && <GridContainer className={classes.addReviewContainer}>
                <form onSubmit={handleReviewSubmit}>
                    <Input type="number" className={classes.input} required={true}
                        onChange={handleStarChange}/>
                    { openErrorStarLabel && <GridItem xs={12}>
                    <label className={classes.labelError}>Allowed stars  1-5.</label>
                    </GridItem>}
                    <GridItem xs={12} >
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Review text" 
                            className={classes.note} onChange={(e) => setNote(e.target.value)} />;
                    </GridItem>
                    <StyledButton default color="primary" size="sm" className={classes.button} 
                        type="submit">
                        Add review
                    </StyledButton>
                </form>
            </GridContainer>}
          {reviews.length > 0 && 
          <GridContainer >
              {reviews.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage).map((review) => <GridItem xs={12}  key={review.id}>
                  <ListItem component={Paper}>
                    <ListItemAvatar>
                        <AccountCircleIcon className={classes.avatar} />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={<b className={classes.text}>{`${review.userID.first_name} ${review.userID.last_name}`}</b>}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                                alignItems="flex-start"
                            >
                                {mapStars(review.stars)}
                            </Typography>
                            {review.reviewText}
                            </React.Fragment>
                        }
                    />
                    </ListItem>
                </GridItem> )}
                <GridItem xs={12}  key="pagination" >
                    <Pagination count={pages} onChange={handlePageChange} className={classes.pagination}/>
                </GridItem>
          </GridContainer>}
          
      </List>);
}

export default Reviews;