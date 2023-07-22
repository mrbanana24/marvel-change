"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./CardList.module.css";

const CardList = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardListRef = useRef(null);

  // Manejar el desplazamiento hacia abajo
  const handleScroll = () => {
    const position = cardListRef.current.scrollTop;
    setScrollPosition(position);
  };

  // Función para renderizar una card
  const renderCard = (item) => {
    return (
      <div key={item.id} className={styles.card}>
        <div className={styles.image}>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
        </div>
        <div className={styles.containerContent}>
          <div className={styles.title}>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.description}>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Agregar el listener de scroll al cargar el componente
    const cardListElement = cardListRef.current;
    cardListElement.addEventListener("scroll", handleScroll);

    return () => {
      // Remover el listener de scroll al desmontar el componente
      cardListElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.cardList} ref={cardListRef}>
      {data.map((item) => renderCard(item))}
    </div>
  );
};

export default CardList;
