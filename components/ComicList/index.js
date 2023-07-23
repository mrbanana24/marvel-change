"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./CardList.module.css";
import Link from "next/link";

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
            {/* la descripcion tiene un limite de 30 palabras */}
            <p> {item.description?.split(" ").slice(0, 30).join(" ")}... </p>
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
      {data.map((item) => (
        <Link className={styles.link} key={item.id} href={`/comic/${item.id}`}>
          {renderCard(item)}
        </Link>
      ))}
    </div>
  );
};

export default CardList;
