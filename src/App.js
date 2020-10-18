import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUpPage from "views/LoginPage/SignUpPage.js";
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'Theme';
// import Error404Page from "views/LoginPage/Error404Page.js";
// import HomePage from "views/LoginPage/HomePage.js";

function App(props) {
  return (
    <Router >
      <ThemeProvider theme={theme}>
        <div >
        <Header
          absolute
          brand="Best booking"
          rightLinks={<HeaderLinks />}
        />
          <Switch>
            {/* <Route exact path="/">
              <HomePage/>
            </Route> */}
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route exact path="/signup">
              <SignUpPage/>
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
