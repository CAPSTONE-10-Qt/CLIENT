import { CircleCheck, TriangleWarning, OctagonWrong } from "@svgs/.";

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
  initLineHeight?: boolean;
  className?: string;
  score?: number;
};
const RoundButton = ({
  text,
  state,
  onClick,
  largeSubtext,
  smallSubtext,
  staticWidth,
  initLineHeight,
  className,
  score,
}: Props) => {
  return (
    <div className={cx("container", className ? className : "")}>
      <div
        className={cx(
          "button",
          state ? "fill" : "stroke",
          onClick ? "clickable" : "",
          largeSubtext || smallSubtext ? "gap" : "",
          staticWidth ? "static" : "",
          initLineHeight ? "line-height" : "",
          score !== undefined ? "score" : "",
        )}
        style={{ width: staticWidth ? `${staticWidth}px` : "auto" }}
        onClick={onClick ? onClick : () => null}
      >
        {score === 1 ? (
          <CircleCheck />
        ) : score === 0.5 ? (
          <TriangleWarning />
        ) : score === 0 ? (
          <OctagonWrong />
        ) : null}
        <p>
          {score === 1
            ? "정답"
            : score === 0.5
              ? "부분정답"
              : score === 0
                ? "오답"
                : text}
        </p>
      </div>
      {largeSubtext && <p className={cx("lgSubtext")}>{largeSubtext}</p>}
      {smallSubtext && <p className={cx("smSubtext")}>{smallSubtext}</p>}
    </div>
  );
};

export default RoundButton;
