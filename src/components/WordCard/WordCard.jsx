import { Div } from "@vkontakte/vkui";
import RandomWords from "../RandomWords/RandomWords";
import "./WordCard.css";

const WordCard = ({ rendmass }) => {
  return (
    <>
      <Div className="card">
        <Div className="wrapper_card">
          <RandomWords rendmass={rendmass} />
        </Div>
      </Div>
    </>
  );
};

export default WordCard;
