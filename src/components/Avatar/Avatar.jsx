import React from "react";
import { useState } from "react";

import BkArrow from "../GameLevel/img/bk-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useAvatars } from "../../services/useAvatars";
import Spinner from "../../ui/Spinner";
import Button from "../Auth/Button";
import { useAvatar } from "../../contexts/AvatarContext";

function Avatar() {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [data, setData] = useState({});
  const { avatars, isLoading } = useAvatars();
  const { setUserData } = useAvatar();

  const navigate = useNavigate();

  const handleImageClick = (id) => {
    setSelectedImageId((prevSelectedImageId) =>
      prevSelectedImageId === id ? null : id
    );
  };

  const getImageStyle = (id) => {
    return id === selectedImageId
      ? { border: "3px solid #000", borderRadius: "64px", opacity: "0.5" }
      : {};
  };

  function getAvatar(id) {
    const findImg = avatars.find((avatar) => avatar._id === id);

    setData(findImg);
    handleImageClick(id);
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="container">
        <nav className="avatar-nav">
          <Link to="Login">
            <img src={BkArrow} alt="" />
          </Link>

          <h3>Select your Avatar</h3>
        </nav>
        <div className="img-container">
          {avatars?.map((avatar) => {
            return (
              <div key={avatar._id}>
                <img
                  src={avatar.avatar_url}
                  alt=""
                  onClick={() => {
                    getAvatar(avatar._id);
                  }}
                  style={getImageStyle(avatar._id)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedImageId && (
        <div className="div-btn">
          <Button
            onClick={() => {
              setUserData(data);
              navigate("/menu");
            }}
          >
            <span>Next</span>
          </Button>
        </div>
      )}
    </>
  );
}

export default Avatar;
