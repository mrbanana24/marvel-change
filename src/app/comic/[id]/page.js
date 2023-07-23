import { getComicById } from "../../../app/utils/api";
import styles from "./ComicPage.module.css";

const ComicPage = async ({ params }) => {
  const { id } = params;
  const response = await getComicById(id);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={`${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`}
          alt="comic"
        />
      </div>
      <div className={styles.details}>
        <h1>{response.data.results[0].title}</h1>
        <p>
          <strong>Publicado:</strong>{" "}
          {new Date(
            response.data.results[0].dates[0].date
          ).toLocaleDateString()}
        </p>
        <p>
          <strong>Escritores:</strong>{" "}
          {response.data.results[0].creators.items
            .filter((creator) => creator.role === "writer")
            .map((writer) => writer.name)
            .join(", ")}
        </p>
        <p>
          <strong>Cover Artist:</strong>{" "}
          {response.data.results[0].creators.items
            .filter((creator) => creator.role === "penciller (cover)")
            .map((writer) => writer.name)
            .join(", ")}
        </p>
        <p>{response.data.results[0].description}</p>
      </div>
    </div>
  );
};

export default ComicPage;
