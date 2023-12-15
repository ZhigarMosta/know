import "./RandomWords.css";

const RandomWords = ({ rendmass }) => {
  return (
    <>
      {rendmass.map((item) => {
        return (
          <div className="wrapper_word" key={item._id}>
            <div className="line">
              <p className="wrapperP word">{item.word}</p>
            </div>
            <div className="line">
              <p className="wrapperP translationWord">{item.translation}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RandomWords;
