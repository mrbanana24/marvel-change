import Card from "../../components/Card";
import styles from "./Home.module.css";
import { getCharacters } from "./utils/api";
import Link from "next/link";

const Home = async () => {
  const characters = await getCharacters();
  return (
    <div className={styles.container}>
      {characters.data.results.map((character) => (
        <Link href={`/character/${character.id}`}>
          <Card
            key={character.id}
            name={character.name}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
