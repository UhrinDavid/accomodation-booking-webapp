import React, { useEffect, useState } from "react";
import styles from "assets/jss/material-kit-react/views/reservations.js";
import {   makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from "@material-ui/core";
import { refreshToken } from "api/apis";
import { getUserReservations } from "api/apis";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";



const useStyles = makeStyles(styles);

const Reservations = (props) => {
    const classes = useStyles();
    const [reservations, setReservations] = useState([]);

    const {  setAccessToken } = props;

    useEffect(() => {
        refreshToken().then (response => {
            setAccessToken(response.access);
            getUserReservations( response.access).then(response2 => {
                setReservations(response2);
            }).catch (error => {
                console.log(error);
            })
        });
    },[setReservations, setAccessToken],);
    
    return (
        <GridContainer className={classes.container}>
            <GridItem xs={12} md={10} lg={8} className={classes.gridItem}>
            <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell className={classes.headerCell}><b>Room Number</b></TableCell>
              <TableCell className={classes.headerCell}><b>Date from</b></TableCell>
              <TableCell className={classes.headerCell}><b>Date to</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { reservations && reservations.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.roomID.roomNumber}
                </TableCell>
                <TableCell >{row.dateFrom}</TableCell>
                <TableCell >{row.dateTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </GridItem>
        </GridContainer>);
        
            }

export default Reservations;