import React from "react";
import './Profile.css'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Profile() {
  return (
    <div>
      <div className="profileHeader">
        <AccountCircleIcon style={{ fontSize: 80 }} />
        <h3>Hamza Shadeez</h3>
      </div>
    </div>
  );
}

export default Profile;
