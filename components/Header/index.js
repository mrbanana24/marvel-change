"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import logoMarvel from "../../public/Marvel_Logo.svg.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (search === "") {
        return;
      } else if (search.includes("http")) {
        const id = search.split("/")[5];
        router.push(`/comic/${id}`);
      } else {
        router.push(`/search?query=${search}`);
      }
    }
  };

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
        <div className={styles.biSearch} onClick={handleSearch}>
          <BiSearch size={25} />
        </div>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      {/* Botón de favoritos a la derecha */}
      <div className={styles.favorites}>
        <Link href="/favorites">
          <AiOutlineStar size={25} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
