import React from "react";
import {
  Div,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";
import "./Form.css";
import FormCard from "../../components/FormCard/FormCard";

const FormQuestion = ({ go, id, rendmass }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="words" />}>
        Проверяй
      </PanelHeader>
      <Group>
        <Div>
          <FormCard go={go} rendmass={rendmass} />
        </Div>
      </Group>
    </Panel>
  );
};

export default FormQuestion;
