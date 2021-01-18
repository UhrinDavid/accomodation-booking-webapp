import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import React, { useState }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "views/LoginPage.js";
import SignUpPage from "views/SignUpPage.js";
import {  ThemeProvider } from '@material-ui/core';
import { theme } from 'Theme';
import RoomPreview  from 'views/RoomPreview';
// import Error404Page from "views/Error404Page.js";
 import {LandingPage} from "views/LandingPage.js";
import SnackbarContent from 'components/Snackbar/SnackbarContent';
import { loggedIn } from 'components/globalFuncs';

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
            <Route exact path="/">
              <LandingPage accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/login">
              <LoginPage setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route  path="/roompreview">
              <RoomPreview accessToken={accessToken} setAccessToken={setAccessToken} addSnackBar={addSnackBar} isLoggedIn={isLoggedIn}/>
            </Route>
            {/* <Route path="/">
              <Error404Page/>
            </Route> */}
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
