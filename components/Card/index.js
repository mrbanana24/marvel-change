"use client";
import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Card.module.css";

const Card = ({ id, name, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorites = (e) => {
    e.stopPropagation();

    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
      setIsFavorite(false);
    } else {
      localStorage.setItem(
        id,
        JSON.stringify({
          name,
          imageUrl,
        })
      );
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(id)) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <div className={styles.card} data-testid="card">
      <img src={imageUrl} alt={name} className={styles.image} />

      <div
        onClick={handleFavorites}
        className={styles.icon}
        data-testid="favorite-icon"
      >
        {isFavorite ? <AiFillStar size={25} /> : <AiOutlineStar size={25} />}
      </div>

      <div className={styles.title}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
