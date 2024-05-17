import React from "react";
import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link, useNavigate } from "react-router-dom";

function MenuWrapper() {
  const navigate = useNavigate();

  return (
    <div className="container">
        
        <div className="settingWrapper">
         
         <div className="setting-content">
      <Link onClick={() => navigate(-1)}>
        <img src={BkArrow} alt="" />
      </Link>

      <div className="settingWrapper">
        <div className="setting-content">
          <h4>Menu</h4>

          <Link to="/level">Single player mode</Link>
          <Link to="/invite">Play with friends</Link>
          <Link to="/leaderBoard">Leaderboard</Link>
          <Link to="/how-to-play">How to play</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuWrapper;
