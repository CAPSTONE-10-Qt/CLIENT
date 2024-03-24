import { Arrow } from "../../../public/svgs";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  text: string;
  onClick: (value: any) => void;
  isBack?: boolean;
};
const RectButton = ({ text, onClick, isBack }: Props) => {
  return (
    <div className={cx("button", isBack ? "back" : "")} onClick={onClick}>
      <p>{text}</p>
      <Arrow />
    </div>
  );
};

export default RectButton;
