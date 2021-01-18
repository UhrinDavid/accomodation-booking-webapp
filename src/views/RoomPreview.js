import React, { useEffect, useState } from "react";
import styles from "assets/jss/material-kit-react/views/roomPreview.js";
import {Input, List, ListItem, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import StyledButton from "components/CustomButtons/Button.js"
import image from "assets/images/room/bedroom-490779_640.jpg";
import { getRoom, getRoomReservationDates, addReservation } from "api/apis";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import jwt_decode from "jwt-decode";



const useStyles = makeStyles(styles);

const RoomPreview = (props) => {
    const classes = useStyles();
    const [ room, setRoom ] = useState();
    const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
    const [selectedDateTo, setSelectedDateTo] = useState(new Date());
    const [reservedDates, setReservedDates] = useState([]);
    const [note, setNote] = useState();

    const { addSnackBar, accessToken } = props;

    useEffect(() => {
      const roomID = window.location.href.split("=")[1];
      Promise.all([getRoom(roomID), getRoomReservationDates(roomID)]).then((responses)  => {
        setRoom(responses[0]);
        setReservedDates(responses[1].map(reservation => {
          let dateFrom = new Date(reservation.dateFrom)
          dateFrom.setDate(dateFrom.getDate() - 1);
          return {
          "after": dateFrom,
          "before": new Date(reservation.dateTo)
        }}));
      }).catch(error => {
        addSnackBar("Server connection problems","danger");
      });
    },[addSnackBar, setRoom]);


    const handleDayChangeFrom = (selectedDay) => {
      setSelectedDateFrom(selectedDay);
    }

    const handleDayChangeTo = (selectedDay) => {
      setSelectedDateTo(selectedDay);
    }

    const handleNoteChange = (event) => {
      setNote(event.target.value);
    }

    const handleReservationSubmit = (e) => {
      e.preventDefault();
      addReservation({
        roomID: room.id,
        userID: jwt_decode(accessToken).user_id,
        dateFrom: selectedDateFrom,
        dateTo: selectedDateTo,
        note: note,
       }, accessToken);
    }
    
    return (
      <div className={classes.container}>
        {room &&
          <GridContainer >
            <GridItem xs={12} sm={8} md={6}>
              <img src={image} alt="Bedroom" className={classes.image}></img>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} >
              <List >
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Capacity: </b>{room.capacity}</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Price: </b>{room.price}&euro;</p>
                </ListItem>
                <ListItem className={classes.specificationItem}>
                  <p className={classes.text}><b>Room number: </b>{room.roomNumber}</p>
                </ListItem>
              </List>
              
              <form onSubmit={handleReservationSubmit}>
                  <GridContainer >
                    <GridItem xs={12} >
                      <DayPickerInput 
                        component = {props => <Input {...props} className={classes.pickerInput} />}
                        value={selectedDateFrom}
                        onDayChange={handleDayChangeFrom}
                        dayPickerProps={{
                          selectedDays: selectedDateFrom,
                          disabledDays:  reservedDates,
                          className: classes.picker,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} >
                      <DayPickerInput 
                        component = {props => <Input {...props}  className={classes.pickerInput}/>}
                        value={selectedDateTo}
                        onDayChange={handleDayChangeTo}
                        dayPickerProps={{
                          selectedDays: selectedDateTo,
                          disabledDays:  reservedDates,
                          className: classes.picker,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} >
                      <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Leave a note" 
                        className={classes.note} onChange={handleNoteChange}/>;
                    </GridItem>
                  </GridContainer>
                  <StyledButton default color="primary" size="lg" className={classes.button}
                    type="submit">
                    Book
                  </StyledButton>
              </form>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} className={classes.text}>
                {room.description}
            </GridItem>
          </GridContainer>
        }
      </div>);
}

export default RoomPreview;