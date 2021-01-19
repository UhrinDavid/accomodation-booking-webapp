import React, { useEffect, useState } from "react";
import styles from "assets/jss/material-kit-react/views/reservations.js";
import {   makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel,  } from "@material-ui/core";
import { refreshToken } from "api/apis";
import { getUserReservations } from "api/apis";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import StopIcon from '@material-ui/icons/Stop';


const useStyles = makeStyles(styles);


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function EnhancedTableHead(props) {
    const { classes,  order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    const headCells = [
        { id: 'roomNumber',  label: 'Room number' },
        { id: 'dateFrom',  label: 'Start date' },
        { id: 'dateTo',  label: 'End date' },
      ];
  
    return (
      <TableHead className={classes.head}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={'left'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

const Reservations = (props) => {
    const classes = useStyles();
    const [reservations, setReservations] = useState([]);
    
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('dateFrom');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    const rowClassname = (dateFrom, dateTo) => {
        if (new Date(dateFrom) > new Date()) {
            return classes.rowUpcoming;
        } else if (new Date(dateFrom) < new Date() && new Date(dateTo) > new Date()) {
            return classes.rowActive;
        } else {
            return classes.rowPast;
        }
    }

    
    return (
        <GridContainer className={classes.container}>
            <GridItem xs={12} className={classes.legend}> 
            <div className={classes.legend}>
                <div className={classes.rowUpcomingDiv}/>
                <label>Upcoming</label>
                <div className={classes.rowActiveDiv} />
                <label>Active</label>
                <div className={classes.rowPastDiv}/>
                <label>Past</label>
                </div>
            </GridItem>
            <GridItem xs={12} md={10} lg={8} className={classes.gridItem}>
            <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={reservations.length}
            />
            <TableBody>
              {reservations && stableSort(reservations, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow className={rowClassname(row.dateFrom, row.dateTo)}
                      bac
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell  component="th" id={labelId} scope="row" padding="none">
                        {parseInt(row.roomID.roomNumber)}
                      </TableCell>
                      <TableCell >{row.dateFrom}</TableCell>
                      <TableCell  >{row.dateTo}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={reservations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
            </GridItem>
        </GridContainer>);
        
            }

export default Reservations;