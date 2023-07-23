import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public/";
const API_PUBLIC_KEY = "0f2c9401148e20833fe464a1e929cdb0";
const API_PRIVATE_KEY = "7147a23a7bce5bd4256d3fab2000afb090ef9f92";

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp) =>
  md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

export const getCharacters = async () => {
  const response = await fetch(`${API_BASE_URL}characters?${query}&limit=8`);
  const data = await response.json();
  return data;
};

export const getCharacterById = async (id) => {
  const response = await fetch(`${API_BASE_URL}characters/${id}?${query}`);
  const data = await response.json();
  return data;
};

// Los comics deben estar ordenados por fecha
export const getComicByCharacterId = async (id) => {
  const response = await fetch(
    `${API_BASE_URL}characters/${id}/comics?${query}&orderBy=-onsaleDate`
  );
  const data = await response.json();
  return data;
};

export const searchCharacters = async (querySearch) => {
  const response = await fetch(
    `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
  );
  const data = await response.json();
  return data;
};
