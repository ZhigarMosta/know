import React, { useState, useEffect } from "react";
import { Div, Group, Panel, PanelHeader, Title, Button } from "@vkontakte/vkui";
import "./Dice.css";
import One from "../../img/one.svg";
import Two from "../../img/two.svg";
import Three from "../../img/three.svg";
import Four from "../../img/four.svg";
import Five from "../../img/five.svg";
import Six from "../../img/six.svg";

const Dice = ({ go, id, rendWords }) => {
  useEffect(() => {
    fetch("/randWord")
      .then((response) => response.json())
      .then((response) => setDate(response));
  }, []);
  const [data, setDate] = useState(null);

  const Throw = (element) => {
    let btn_next = document.getElementById("btn_next");
    let currentClass = "";

    let elem = element.target;
    let param = elem.closest(".twist");
    param.style.display = "none";

    let count = 0;

    function rollDice() {
      let min = Math.ceil(1);
      let max = Math.floor(7);
      var randNum = Math.floor(Math.random() * (max - min) + min);
      let cube = document.getElementById("cube");
      let showClass = "show-" + randNum;
      if (currentClass) {
        cube.classList.remove(currentClass);
      }
      cube.classList.add(showClass);
      currentClass = showClass;
    }

    let intervalId = setInterval(function () {
      count++;
      rollDice();
      if (count == 25) {
        clearInterval(intervalId);
        btn_next.style.display = "block";

        rendWords(data);
        let showClass = "show-" + data.length;
        if (currentClass) {
          cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
      }
    }, 100);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Узнай</PanelHeader>
      <Group>
        <Div className="secPage_block">
          <Title className="secPage_text">
            Узнай свое количество <br />
            слов на сегодня
          </Title>
          <Div className="scene">
            <Div className="cube" id="cube">
              <Div className="cube__face cube__face--1">
                <img src={One} alt="" />
              </Div>
              <Div className="cube__face cube__face--2">
                <img src={Two} alt="" />
              </Div>
              <Div className="cube__face cube__face--3">
                <img src={Three} alt="" />
              </Div>
              <Div className="cube__face cube__face--4">
                <img src={Four} alt="" />
              </Div>
              <Div className="cube__face cube__face--5">
                <img src={Five} alt="" />
              </Div>
              <Div className="cube__face cube__face--6">
                <img src={Six} alt="" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="wrapper_btn">
          <div className="twist">
            <Button
              id="btn_throw"
              onClick={Throw}
              data-to="words"
              mode="primary"
              size="l"
              stretched
            >
              Крутить
            </Button>
          </div>
          <div className="next_page">
            <Button
              id="btn_next"
              onClick={go}
              data-to="words"
              mode="primary"
              size="l"
              stretched
              className="none"
            >
              Продолжить
            </Button>
          </div>
        </Div>
      </Group>
    </Panel>
  );
};

export default Dice;
