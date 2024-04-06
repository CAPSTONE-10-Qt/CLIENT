import {
  CircleCheck,
  TriangleWarning,
  OctagonWrong,
} from "../../../public/svgs";
import CircleGraph from "@components/CircleGraph";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Table = ({
  type,
  array,
}: {
  type: "time" | "score" | "graph";
  array: any[];
}) => {
  return (
    <table className={cx("container")}>
      <thead>
        <tr>
          {type === "graph"
            ? ["발화 지연 시간", "침묵 시간", "얼굴 표정"].map(el => (
                <th>{el}</th>
              ))
            : array.map((el, idx) => (
                <th>
                  {type === "time"
                    ? idx === 0
                      ? "면접 소요 시간"
                      : `#${idx} 답변 시간`
                    : idx === 0
                      ? "면접 질문 개수"
                      : `#${idx} 답변 결과`}
                </th>
              ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {type === "graph"
            ? ["late", "silent", "face"].map((el, idx) => (
                <th className={cx("graph-th")}>
                  <CircleGraph type={el} percent={array[idx]} />
                </th>
              ))
            : array.map((el, idx) => (
                <th>
                  {type === "time" ? (
                    idx === 0 ? (
                      `총 ${Math.floor(el / 60)}분 ${el % 60}초`
                    ) : (
                      `${el}초`
                    )
                  ) : idx === 0 ? (
                    `총 ${el}개`
                  ) : el === 1 ? (
                    <CircleCheck />
                  ) : el === 0.5 ? (
                    <TriangleWarning />
                  ) : (
                    <OctagonWrong />
                  )}
                </th>
              ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
