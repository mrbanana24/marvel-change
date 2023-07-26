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
        let parsedData;
        try {
          parsedData = JSON.parse(localStorage.getItem(favorite));
        } catch (error) {
          console.error("Error parsing favorite data:", error);
          return null;
        }

        const { name, imageUrl } = parsedData;
        return (
          <Link key={favorite} href={`/character/${favorite}`}>
            <Card id={favorite} name={name} imageUrl={imageUrl} priority />
          </Link>
        );
      })}
    </div>
  );
};

export default Favorites;
