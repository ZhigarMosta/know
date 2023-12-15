import React from "react";
import { Panel, PanelHeader, Button, Group, Div, Title } from "@vkontakte/vkui";
import Logo from "../../img/logo.svg";
import "./Home.css";
import ModalCard from "../../modals/ModalCard/ModalCard";

const Home = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Начальная страница</PanelHeader>
      <Group>
        <Div className="wrapper_logo">
          <img src={Logo} alt="logo" className="logo_main" />
        </Div>
        <Div>
          <Title className="name_application">Знаю</Title>
          <ModalCard />
        </Div>
        <Div className="wrapper_btn">
          <Button stretched size="l" mode="primary" onClick={go} data-to="dice">
            Начать
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export default Home;
