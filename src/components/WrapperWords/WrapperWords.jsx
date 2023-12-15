import Words from "../Words/Words";
import "./WrapperWords.css";

const WrapperWords = () => {
  return (
    <h1 className="WrapperWords">
      {/* слова */}
      <Words />
    </h1>
  );
};

export default WrapperWords;
