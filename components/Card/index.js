import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./Card.module.css";

const Card = ({ name, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />

      {/*Favorite Star */}
      <div className={styles.icon}>
        <AiOutlineStar size={25} />
      </div>
      <div className={styles.title}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
