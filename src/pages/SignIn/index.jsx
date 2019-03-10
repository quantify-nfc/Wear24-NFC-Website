// Import FirebaseAuth and firebase.
import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Paper, Typography, Divider } from "@material-ui/core";
import * as FirebaseConsts from "./../../constants/Firebase";

// Configure Firebase.

firebase.initializeApp(FirebaseConsts.FirebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Email as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

class SignInPage extends Component {
  GoBack = () => {
    window.history.back();
  };

  render() {
    return (
      <Paper
        elevation={4}
        style={{ width: "50%", margin: "96px auto 32px auto", padding: 32 }}
      >
        <Typography variant="h3" gutterBottom>
          Sign in
        </Typography>
        <Divider variant="fullWidth" />
        <br />
        <Typography
          variant="body1"
          paragraph
          style={{ fontFamily: "Roboto, Manrope, 'Segoe UI', sans-serif" }}
        >
          Please choose an option below to sign in to Quantify:
        </Typography>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <Typography
          variant="body2"
          paragraph
          style={{
            fontFamily: "Roboto, Manrope, 'Segoe UI', sans-serif",
          }}
          component="a"
          href="#"
          onClick={this.GoBack}
        >
          Go back
        </Typography>
      </Paper>
    );
  }
}

export default SignInPage;
