import classes from "./sidebar.module.css";
import logo from "../../assets/logo-32x32.png";
import React from "react";

const Sidebar = () => {
  return (
    <aside className={classes["container"]}>
      <div className={classes["tabs-container"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <i className="fas fa-home text-primary"></i>
          <span className="text-primary">Home</span>
        </div>
        <div>
          <i className="fas fa-hashtag text-primary"></i>
          <span className="text-primary">Explore</span>
        </div>
        <div className="badge">
          <i className="fas fa-bell text-primary"></i>
          <span className="text-primary">Notifications</span>
          <span className="notification-num">4</span>
        </div>
        <div>
          <i className="fas fa-user-alt text-primary"></i>
          <span className="text-primary">Profile</span>
        </div>
        <button className="btn btn-primary">Post</button>
      </div>
      <div className={classes["profile-container"]}>
        <div className={classes["user-detail"]}>
          <span className="text-primary">Mohammed</span>
          <span className="text-primary">@mhdsas</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
