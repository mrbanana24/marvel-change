"use client";
import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./Card.module.css";

const Card = ({ id, name, imageUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // handleFavorites guarda o elimina el ID como key y name y url como value del personaje en localStorage para luego mostrarlo en la página de favoritos
  const handleFavorites = () => {
    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
      setIsFavorite(false);
    } else {
      // Si el personaje no está en localStorage, lo guardamos
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

  // Comprobamos si el ID del personaje está en localStorage para mostrarlo como favorito
  useEffect(() => {
    if (localStorage.getItem(id)) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <div className={styles.card}>
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
