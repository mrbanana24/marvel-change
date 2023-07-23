"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchCharacters } from "../utils/api";
import Card from "../../../components/Card";
import Style from "./Search.module.css";

const searchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      try {
        const response = await searchCharacters(query);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (query) {
      search();
    }
  }, [query]);

  return (
    <div className={Style.container}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))
      )}
    </div>
  );
};

export default searchPage;
