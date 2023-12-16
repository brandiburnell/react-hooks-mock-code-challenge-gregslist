import React, { useState } from "react";

function ListingCard({ image, description, location, id, onDeleteListing}) {
  const [isFavorite, setFavorite] = useState(false);

  function handleFavorite() {
    setFavorite(!isFavorite);
  }

  function handleDelete() {
    onDeleteListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite === true ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
