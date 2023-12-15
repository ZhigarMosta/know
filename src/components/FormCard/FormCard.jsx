import FormWords from "../FormWords/FormWords";
import "./FormCard.css";
import { Div } from "@vkontakte/vkui";

const FormCard = ({ go, rendmass }) => {
  return (
    <>
      <Div className="card">
        <FormWords go={go} rendmass={rendmass} />
      </Div>
    </>
  );
};

export default FormCard;
