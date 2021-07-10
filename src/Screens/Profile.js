import React, { useEffect } from "react";
import "./Profile.css";
import Avatar from "@material-ui/core/Avatar";
import { userState } from "../Recoil/UserState";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../Config/Firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: 10
  },
}));

function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const classes = useStyles();

  useEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged((userData) => {
        if (userData) {
          db.collection("Users")
            .doc(userData.displayName)
            .get()
            .then((user1) => {
              setUser(user1.data());
            });
        } else {
          console.log("No user here");
        }
      });
    }
  }, []);
  return (
    <div>
      <div className="profileHeader">
        <Avatar src={user ? user.photo : ""} className={classes.large} />
        <h5 id='user__name'>{user?.name}</h5>
        <p id='user_email'>{user?.email}</p>

      </div>

      {/* Posts div */}
      <div className='mypost_div'>
        
      </div>
    </div>
  );
}

export default Profile;
