import React from "react";
import styles from "./Header.module.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import logoMarvel from "../../public/Marvel_Logo.svg.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logoMarvel} alt="marvelLogo" />
        </Link>
      </div>

      {/* Buscador en el centro */}
      <div className={styles.search}>
        <div className="biSearch">
          <BiSearch size={25} />
        </div>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Buscar" />
        </div>
      </div>

      {/* Botón de favoritos a la derecha */}
      <div className={styles.favorites}>
        <AiOutlineStar size={25} />
      </div>
    </header>
  );
};

export default Header;
