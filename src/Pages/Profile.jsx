import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  const isLoggedIn=Boolean(user?.name);

  return (
    <div className="profile">
      <h1>User Profile</h1>
      {!isLoggedIn && (
        <div className="profile-empty">
          <h3>No user logged in</h3>
          <p>Please update your profile or login from Home page</p>
        </div>
      )}
      {isLoggedIn &&(
        <div className="profile-card">
          <h2>{user.name}</h2>

          <div className="profile-info">
            <p><b>Email:</b> {user.email || "Not provided"}</p>
            <p><b>Mobile:</b> {user.mobile || "Not provided"}</p>
            <p><b>City:</b> {user.city || "Not provided"}</p>
            <p><b>Membership:</b> {user.membership || "Free User"}</p>
          </div>
        </div>
      )}
    </div>
  );
}
