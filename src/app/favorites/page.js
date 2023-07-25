"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Cargar los favoritos almacenados en localStorage al montar el componente
  useEffect(() => {
    const favorites = [];
    for (let i = 0; i < localStorage.length; i++) {
      favorites.push(localStorage.key(i));
    }
    setFavorites(favorites);
  }, []);

  return (
    <div className={styles.container}>
      {favorites.map((favorite) => {
        const { name, imageUrl } = JSON.parse(localStorage.getItem(favorite));
        return (
          <Link href={`/character/${favorite}`}>
            <Card
              key={favorite}
              id={favorite}
              name={name}
              imageUrl={imageUrl}
              priority
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Favorites;
