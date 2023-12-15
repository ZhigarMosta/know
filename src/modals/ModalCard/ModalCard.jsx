import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { View, SplitLayout, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import CustomPopout from "./../CustomPopout/CustomPopout";

import "./ModalCard.css";

const ModalCard = () => {
  const [popout, setPopout] = useState(null);

  const onClick = () =>
    setPopout(
      <CustomPopout
        text="Пополняйте свой словарный запас на английском вместе с “Знаю”! Просто
    нажмите кнопку “начать” и получите свои слова на сегодня Чтобы точно
    запомнить их, нажмите “добавить к выученым словам” и проверьте свои
    знания Удачи!"
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

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };
  return (
    <SplitLayout popout={popout}>
      <View activePanel="popout">
        <Panel id="popout">
          <button className="btn_modal" onClick={onClick}>
            Подробней
          </button>
        </Panel>
      </View>
    </SplitLayout>
  );
};

export default ModalCard;
