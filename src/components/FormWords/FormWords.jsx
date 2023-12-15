import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Panel, Button, Input, View, SplitLayout, Div } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./FormWords.css";

import CustomPopout from "../../modals/CustomPopout/CustomPopout";

const FormWords = ({ go, rendmass }) => {
  console.log(rendmass);

  const [popout, setPopout] = useState(null);

  const onClick = () =>
    setPopout(
      <CustomPopout
        text="Поздравляю, вы выучили слова"
        onClose={() => setPopout(null)}
      />
    );

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setPopout(null);
    }
    fetchData();
  }, []);

  const Test = (element) => {
    let count = 0;
    let word;
    const inp = document.querySelectorAll("#test");
    const btn = document.querySelector(".none");
    for (let i = 0; i != rendmass.length; i++) {
      word = inp[i].value;
      inp[i].value = word.toLowerCase();
      if (inp[i].value == rendmass[i].word) {
        //da
        inp[i].classList.add("green");
        inp[i].classList.remove("red");
        inp[i].disabled = true;
        count++;
      } else {
        //net
        inp[i].classList.add("red");
        inp[i].classList.remove("green");
      }
    }
    if (count == rendmass.length) {
      onClick();

      let elem = element.target;
      let param = elem.closest(".wrapper_for_button");
      param.style.display = "none";

      btn.style.display = "block";
    }
  };

  const Inp = (element) => {
    let elem = element.target;
    elem.classList.remove("red");
  };

  return (
    <>
      <SplitLayout popout={popout}>
        <View activePanel="popout">
          <Panel id="popout">
            <form className="form">
              <Div className="wrapper_Form">
                {rendmass.map((item) => {
                  return (
                    <div className="wrapper_word" key={item._id}>
                      <div className="wrapper_content_form">
                        <div className="line input">
                          <Input
                            type="text"
                            placeholder="Введите перевод"
                            id="test"
                            onClick={Inp}
                          />
                        </div>
                        <div className="line">
                          <p className="form_words">{item.translation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Div>
              <Div className="wrapper_btn_form">
                <Div className="wrapper_for_button">
                  <Button
                    onClick={Test}
                    id="btn_form"
                    mode="primary"
                    size="l"
                    stretched
                  >
                    проверить
                  </Button>
                </Div>
                <Div className="new_day_btn">
                  <Button
                    onClick={go}
                    data-to="home"
                    className="none"
                    id="btn_form"
                    mode="primary"
                    size="l"
                    stretched
                  >
                    выучить новые слова
                  </Button>
                </Div>
              </Div>
            </form>
          </Panel>
        </View>
      </SplitLayout>
    </>
  );
};

export default FormWords;
