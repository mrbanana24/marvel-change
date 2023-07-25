"use client";
import Card from "../../components/Card";
import styles from "./Home.module.css";
import { useEffect, useState } from "react"; // Importa useEffect y useState
import { getCharacters } from "./utils/api";
import Link from "next/link";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchRandomCharacters() {
      const randomCharacters = await getCharacters(true);
      setCharacters(randomCharacters.data.results);
    }
    fetchRandomCharacters();
  }, []);

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Link href={`/character/${character.id}`} key={character.id}>
          <Card
            id={character.id}
            name={character.name}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
