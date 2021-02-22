import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ImageCard({ image, openModal }) {
  return (
    <div className="image-card" key={image.id}>
      <img
        onClick={() => openModal(image)}
        className="image"
        src={image.urls.thumb}
      />
      <div className="details">
        <span className="card-name">
          {image.user.first_name} {image.user.last_name}
        </span>

        <span className="card-likes">
          <FontAwesomeIcon
            style={{ marginRight: "6px", color: "#d62828" }}
            icon={faHeart}
          />
          {image.likes}
        </span>
      </div>
    </div>
  );
}
