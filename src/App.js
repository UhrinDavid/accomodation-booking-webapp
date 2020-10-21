import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "views/LoginPage.js";
import SignUpPage from "views/SignUpPage.js";
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'Theme';
import { RoomPreview } from 'views/RoomPreview';
// import Error404Page from "views/Error404Page.js";
 import {LandingPage} from "views/LandingPage.js";

function App(props) {
  return (
    <Router >
      <ThemeProvider theme={theme}>
        <div >
        <Header
          absolute
          brand="Best booking"
          rightLinks={<HeaderLinks />}
          color="primary"
        />
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage/>
            </Route>
            <Route exact path="/roompreview-example">
              <RoomPreview/>
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
