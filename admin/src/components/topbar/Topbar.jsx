import { ExitToApp } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Topbar() {
  const history = useHistory();

  const logout = () => {
    history.push("/");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shuvam Liquors Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer" onClick={logout}>
            <ExitToApp />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
