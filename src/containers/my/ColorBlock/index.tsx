import {
  ColorPink,
  ColorBlue,
  ColorGreen,
  ColorBeige,
} from "../../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  title: string;
  text: string;
  state: string;
  current: string | undefined;
  onClick: () => void;
};
const ColorBlock = ({ title, text, state, current, onClick }: Props) => {
  return (
    <div
      className={cx("container", state, state === current ? "clicked" : "")}
      onClick={onClick}
    >
      {state === current ? (
        state === "pink" ? (
          <ColorPink />
        ) : state === "blue" ? (
          <ColorBlue />
        ) : state === "green" ? (
          <ColorGreen />
        ) : (
          <ColorBeige />
        )
      ) : (
        <div className={cx("circle")} />
      )}
      <div className={cx("text-area")}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ColorBlock;
