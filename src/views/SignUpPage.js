import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/signUpPage.js";

import image from "assets/images/main_background.jpg";
import { AccountCircle, Lock } from "@material-ui/icons";
import { register } from "api/apis";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  // value names must match /register api format
  const [username, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setRepeatPassword] = useState("");

  const { addSnackBar } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    register({username, first_name, last_name, email, password, password2});
    addSnackBar("Sucessfuly registered!", "success");
    window.location.href = '/login';
  }

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>Signup</h3>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      onChange={(e) => setUserName(e.target.value)}
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "text",
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={(e) => setFirstName(e.target.value)}
                      labelText="First name"
                      id="firstName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "text",
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={(e) => setLastName(e.target.value)}
                      labelText="Last name"
                      id="lastName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "text",
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={(e) => setEmail(e.target.value)}
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={(e) => setPassword(e.target.value)}
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      labelText="Repeat Password"
                      id="repeatPassword"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required : true,
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button default color="primary" size="lg" type="submit">
                      Sign up!
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
