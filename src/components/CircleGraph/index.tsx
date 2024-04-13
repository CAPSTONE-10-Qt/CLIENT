import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const CircleGraph = ({
  type,
  percent,
}: {
  type: string;
  percent: number | number[];
}) => {
  return (
    <div className={cx("container")}>
      <div className={cx("chart")}>
        <div className={cx("donut")}>
          <p
            className={cx(
              typeof percent !== "number"
                ? `idx${percent.indexOf(Math.max(...percent))}`
                : "",
            )}
          >
            {typeof percent === "number"
              ? percent + "%"
              : Math.max(...percent) + "%"}
          </p>
        </div>
        <div
          className={cx("chart-bar")}
          style={{
            background:
              typeof percent === "number"
                ? `conic-gradient(
                    var(--color-theme-bright),
                    var(--color-theme-main) ${(percent / 100) * 360}deg,
                    var(--color-theme-light) ${(percent / 100) * 360}deg,
                    var(--color-theme-main)
                  )`
                : `conic-gradient(
                    var(--color-theme-light),
                    var(--color-theme-main) ${(percent[0] / 100) * 360}deg,
                    var(--color-theme-light) ${(percent[0] / 100) * 360}deg,
                    var(--color-theme-light) ${Math.round(
                      ((percent[0] + percent[1]) / 100) * 360,
                    )}deg,
                    var(--color-theme-bright) ${Math.round(
                      ((percent[0] + percent[1]) / 100) * 360,
                    )}deg,
                    var(--color-theme-main)
                    )`,
          }}
        />
      </div>
      <div className={cx("text-section")}>
        {typeof percent === "number"
          ? ["시간", "발화 시간"].map((el, idx) => (
              <div key={el}>
                <div className={cx("bold")}>
                  <div className={cx("dot", `index${idx}`)} />
                  {`${
                    idx === 0 ? (type === "late" ? "지연" : "침묵") : ""
                  } ${el}`}
                </div>
                <p>{idx === 0 ? `${percent}%` : `${100 - percent}%`}</p>
              </div>
            ))
          : ["긍정", "중립", "부정"].map((el, idx) => (
              <div key={el}>
                <div className={cx("bold")}>
                  <div className={cx("dot", `index${idx}`)} />
                  {el}
                </div>
                <p>{percent[idx] + "%"}</p>
              </div>
            ))}
      </div>
      {type === "late" && (
        <p className={cx("description")}>
          * ‘음’, ‘그’, ‘어’와 같은 버벅거림로 인한 발화 지연
        </p>
      )}
    </div>
  );
};

export default CircleGraph;
