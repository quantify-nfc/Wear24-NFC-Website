import Firebase from "firebase";
import swal from "sweetalert2";
import * as CookieFunctions from "../cookies/index";

Firebase.messaging().usePublicVapidKey(
  "BP_iGRdq3UjaeTjEr7nGLXFjmSK6tgm4p7M8S-uCOqwQnzNQz0GsHpCm8fhjPGtW83oC0sK79wHy6IPfxhcUq5M"
);

export const Auth = {
  IsSignedIn: Firebase.auth().currentUser !== null,
  RedirectIfNotSignedIn: () => {
    let notSignedIn = Firebase.auth().currentUser === null;
    if (notSignedIn) window.location.href = "/signin";
    return notSignedIn;
  },
};

export const Messaging = {
  GetPermission: (overrideCookie = false) => {
    if (
      (CookieFunctions.GetCookie("hideNotificationPrompt") === "1" && // If user has hidden prompt
        !overrideCookie) || // and we aren't overriding the cookie
      Notification.permission === "granted" || // or the permission has been granted
      window.location.pathname.startsWith("/signin") || // or user on signin page
      window.location.pathname.startsWith("/") // or user on home page (increases retention)
    )
      return;

    swal({
      title: "Notifications",
      html:
        "Will you let us send you notifications when a blog update is posted or when a new version of Quantify is released? <b>You must create an account to do this.</b><br/><br/>If you don't want us to, we won't bother you for 60 days.",
      type: "info",
      showCancelButton: true,
      cancelButtonText: "Nah, I'm good",
      confirmButtonText: "Sure, hit me up!",
    }).then((result) => {
      console.log(result);
      if (result.value !== true) {
        CookieFunctions.SetCookie("hideNotificationPrompt", "1", "/", 0, 2);
        return false;
      } else {
        if (Auth.RedirectIfNotSignedIn()) return;

        Firebase.messaging()
          .requestPermission()
          .then(() => {
            console.log("Notification permission granted.");
            swal({
              title: "Notifications allowed",
              html:
                "Thanks for allowing us to send you notifications.<br/><br/>We'll let you know when a new release is publicised or when a blog update is posted.",
              type: "success",
              confirmButtonText: "Thanks!",
            });

            // Get Instance ID token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            Firebase.messaging()
              .getToken()
              .then(function(currentToken) {
                if (currentToken) {
                  console.log(currentToken);
                  //updateUIForPushEnabled(currentToken);
                } else {
                  // Show permission request.
                  console.log(
                    "No Instance ID token available. Request permission to generate one."
                  );
                  // Show permission UI.
                  //updateUIForPushPermissionRequired();
                  //setTokenSentToServer(false);
                }
              })
              .catch(function(err) {
                console.log("An error occurred while retrieving token. ", err);
                //showToken("Error retrieving Instance ID token. ", err);
                //setTokenSentToServer(false);
              });

            return true;
          })
          .catch((err) => {
            console.log("Unable to get permission to notify.", err);
            swal({
              title: "Failed to get notification permission",
              html: `Error: Failed to allow cookies. (${
                err.code
              })<br/><br/>If you want them, click the lock icon at the top of your browser and choose 'Allow' next to notifications.`,
              type: "error",
              confirmButtonText: "Ok",
            });

            return false;
          });
      }
    });
  },
};
