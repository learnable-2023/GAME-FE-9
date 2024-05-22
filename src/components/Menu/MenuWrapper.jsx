import React from 'react'
import  { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthenticationContext";


function MenuWrapper() {
  const { setIsAuthenticated } = useAuth();

  return (
    <div className="container">
         <h4>Menu</h4>
        <div className="settingWrapper">
       
         <div className="setting-content"  >
    
          
          <Link to="/level">
          <p >Single player mode</p>
      </Link>
          <Link to="/404">
          <p >Play with friends</p>
      </Link>
          <Link to="leaderboard">
          <p>Leaderboard</p>
      </Link>
          <Link to="HowToPlay">
          <p>How to play</p>
      </Link>
          <Link to="/settings">
          <p>Settings</p>
      </Link>
         
         </div>
    
        </div>
      </div>
  );
}

export default MenuWrapper;