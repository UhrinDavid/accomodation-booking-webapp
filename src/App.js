import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import React, { useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import LoginPage from "views/LoginPage.js";
import SignUpPage from "views/SignUpPage.js";
import {  ThemeProvider } from '@material-ui/core';
import { theme } from 'Theme';
import RoomPreview  from 'views/RoomPreview';
// import Error404Page from "views/Error404Page.js";
import LandingPage from "views/LandingPage.js";
import Reservations from "views/Reservations.js";
import Reviews from "views/Reviews.js";
import SnackbarContent from 'components/Snackbar/SnackbarContent';
import { loggedIn } from 'components/globalFuncs';
import PublicRoute from 'views/routeTypes/PublicRoute';
import PrivateRoute from 'views/routeTypes/PrivateRoute';


function App(props) {
  const [accessToken, setAccessToken] = useState("");
  const [snackBar, setSnackBar] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());

  // color "info", "success", "warning", "danger", "primary"
  const addSnackBar = (message, color) => {
    setSnackBar(<SnackbarContent message={message} color={color} close={true}/>);
  }

  return (
    <Router >
      <ThemeProvider theme={theme}>
        <div >
        <Header
          absolute
          brand="Best booking"
          rightLinks={<HeaderLinks isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
          color="primary"
        />
        {snackBar}
          <Switch>
            <PublicRoute exact path="/login" restricted isLoggedIn={isLoggedIn}
              component={<LoginPage setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
            <PublicRoute exact path="/signup" restricted isLoggedIn={isLoggedIn}
              component={<SignUpPage addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
            <PublicRoute  path="/roompreview" isLoggedIn={isLoggedIn}
              component={<RoomPreview accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
            <PublicRoute path="/reviews" 
               component={<Reviews accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
            <PrivateRoute exact path='/reservations' isLoggedIn={isLoggedIn}
              component={<Reservations accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
            <PublicRoute  path="/"  isLoggedIn={isLoggedIn}
              component={<LandingPage accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>}/>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
