import React from "react";
import { Div, Group, Panel, PanelHeader, Title, Button } from "@vkontakte/vkui";
import "./Words.css";
import WordCard from "../../components/WordCard/WordCard";

const Words = ({ go, id, rendmass }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Учи</PanelHeader>
      <Group>
        <Div>
          <Title className="text_title">Твои слова:</Title>
          <WordCard rendmass={rendmass} />
          <Button
            id="btn_next"
            onClick={go}
            data-to="form"
            className="btn_word"
            mode="primary"
            size="l"
            stretched
          >
            Перейти к проверке
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Words;
