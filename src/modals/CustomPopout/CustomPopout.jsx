import { PopoutWrapper, useAdaptivityConditionalRender } from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

import "./CustomPopout.css";

const CustomPopout = ({ onClose, text }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: "var(--vkui--color_background_content)",
          borderRadius: 8,
          position: "relative",
          padding: "12px",
        }}
      >
        <h4 className="modal_text">{text}</h4>
      </div>
    </PopoutWrapper>
  );
};

export default CustomPopout;
