import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  text: string;
  state: boolean; // false - 스트로크, true - 채우기
  onClick?: (value: any) => void;
  largeSubtext?: string;
  smallSubtext?: string;
  staticWidth?: number;
};
const RoundButton = ({
  text,
  state,
  onClick,
  largeSubtext,
  smallSubtext,
  staticWidth,
}: Props) => {
  return (
    <div className={cx("container")}>
      <div
        className={cx(
          "button",
          state ? "fill" : "stroke",
          onClick ? "clickable" : "",
          largeSubtext || smallSubtext ? "gap" : "",
          staticWidth ? "static" : "",
        )}
        style={{ width: staticWidth ? `${staticWidth}px` : "auto" }}
        onClick={onClick ? onClick : () => null}
      >
        <p>{text}</p>
      </div>
      {largeSubtext && <p className={cx("lgSubtext")}>{largeSubtext}</p>}
      {smallSubtext && <p className={cx("smSubtext")}>{smallSubtext}</p>}
    </div>
  );
};

export default RoundButton;
