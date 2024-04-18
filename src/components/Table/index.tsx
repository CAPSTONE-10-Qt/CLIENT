import React from "react";
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
  const title = ["지연 시간", "침묵 시간", "얼굴 표정"];
  const table = ["late", "silent", "face"];
  const isOnlyVoice =
    array[2] && array[2].reduce((p: number, c: number) => p + c, 0) === 0;
  return (
    <table className={cx("container")}>
      {(array.length === 5
        ? [array]
        : array.length === 10
          ? [array.slice(0, 5), array.slice(5, 10)]
          : [array.slice(0, 5), array.slice(5, 10), array.slice(10, 15)]
      ).map((list, index) => (
        <React.Fragment key={index}>
          <thead>
            {type === "graph" && index === 0 ? (
              <tr className={cx("graph-tr")}>
                {(isOnlyVoice ? title.slice(0, 2) : title).map(el => (
                  <th key={el}>{el}</th>
                ))}
              </tr>
            ) : (
              <tr>
                {list.map((el, idx) => (
                  <th className={cx("thead-th")} key={idx}>
                    <p>
                      {type === "time"
                        ? `#${index * 5 + idx + 1} 답변 시간`
                        : `#${index * 5 + idx + 1} 답변 결과`}
                    </p>
                    <p>#{index * 5 + idx + 1}</p>
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {type === "graph" && index === 0 ? (
              <>
                <tr className={cx("graph-tr")}>
                  {(isOnlyVoice ? table.slice(0, 2) : table).map((el, idx) => (
                    <th className={cx("graph-th")} key={idx}>
                      <CircleGraph type={el} percent={array[idx]} />
                    </th>
                  ))}
                </tr>
                {(isOnlyVoice ? table.slice(0, 2) : table).map((el, idx) => (
                  <React.Fragment key={idx}>
                    <tr className={cx("graph-tr", "mobile", "title")}>
                      <th colSpan={3}>{title[idx]}</th>
                    </tr>
                    <tr className={cx("graph-tr", "mobile")}>
                      <th className={cx("graph-th")} colSpan={3}>
                        <CircleGraph type={el} percent={array[idx]} />
                      </th>
                    </tr>
                  </React.Fragment>
                ))}
              </>
            ) : (
              <tr>
                {list.map((el, idx) => (
                  <th key={idx}>
                    {type === "time" ? (
                      `${el}초`
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
            )}
          </tbody>
        </React.Fragment>
      ))}
    </table>
  );
};

export default Table;
