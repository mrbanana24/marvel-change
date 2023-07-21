import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      {/*Favorite Star */}
      <div>
        <AiOutlineStar size={25} />
      </div>
      <div>
        <p>Name</p>
      </div>
    </div>
  );
};

export default Card;
