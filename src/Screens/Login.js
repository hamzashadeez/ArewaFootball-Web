import React from "react";
import "./Login.css";
import Logo from "../assets/google-logo.png";
import { auth, provider, db } from "../Config/Firebase";
import { userState } from "../Recoil/UserState";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);
  const login = async () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          post: [],
        };
        // Save user data to firebase
        db.collection("Users")
          .doc(userData.name)
          .set(userData, { merge: true })
          .then(() => {
            // user data to state management
            setUser(userData);
            history.push("/");
            console.log("Success");
          });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <div className="LoginScreen" onClick={() => login()}>
      <div className="card bg-light shadow rounded p-5 cardy">
        <img
          src={Logo}
          alt=""
          style={{ maxWidth: "60px", marginBottom: "24px" }}
        />
        <p style={{ fontWeight: "bold", color: "#333" }}>Sign in with Google</p>
      </div>
    </div>
  );
}

export default Login;
