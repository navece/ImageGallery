import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Modal({ closeModal, open, data }) {
  const handleClose = () => {
    closeModal();
  };
  if (open) {
    return (
      <div className="modal">
        <div onClick={handleClose} className="close-button">
          <FontAwesomeIcon icon={faTimes} size="4x" />
        </div>
        <div className="modal-container">
          <div className="modal-image">
            <img className="image" src={data.urls.regular} />
          </div>
          <div className="modal-details">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "18px" }} className="modal-detail-row">
                Thanks to {data.user.name}
              </div>
              <div className="modal-detail-row">
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />{" "}
                <span>{data.likes}</span>
              </div>
              <div className="modal-detail-row">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span>{data.user.instagram_username}</span>
              </div>
              <div className="modal-detail-row">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span>{data.user.twitter_username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
