import React from "react";
import styles from "./CardDetail.module.css";

const CardDetail = ({ character }) => {
  // Check if character is provided, or use an empty object if it's missing
  const {
    name = "N/A",
    description = "No description available.",
    thumbnail = {},
  } = character || {};

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {/* Use optional chaining (?.) to handle undefined thumbnail.path and thumbnail.extension */}
        <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt={name} />
      </div>
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
