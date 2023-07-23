import { getCharacterById, getComicByCharacterId } from "../../utils/api";
import CardDetail from "../../../../components/CardDetail";
import CardList from "../../../../components/ComicList";
import styles from "./CharacterPage.module.css";

const CharacterPage = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const response = await getCharacterById(id);
  const comics = await getComicByCharacterId(id);

  return (
    <div className={styles.container}>
      {/* primera mitad de la pantalla */}
      <div className={styles.cardDetail}>
        <CardDetail character={response.data.results[0]} />
      </div>
      {/* segunda mitad de la pantalla */}
      <div className={styles.cardList}>
        <CardList data={comics.data.results} />
      </div>
    </div>
  );
};

export default CharacterPage;
