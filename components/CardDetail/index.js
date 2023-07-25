import React from "react";
import styles from "./CardDetail.module.css";

const CardDetail = ({ character }) => {
  const {
    name = "N/A",
    description = "No description available.",
    thumbnail = {},
  } = character || {};
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
