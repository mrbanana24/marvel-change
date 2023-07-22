import { getCharacterById } from "../../utils/api";

const CharacterPage = ({ params }) => {
  const { id } = params;
  console.log(id);
  const response = getCharacterById(id);

  return (
    <div>
      <p>asdasd</p>
    </div>
  );
};

export default CharacterPage;
