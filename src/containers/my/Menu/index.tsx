import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Menu = ({
  tab,
  setTab,
}: {
  tab: number;
  setTab: (value: number) => void;
}) => {
  const list = ["설정", "내 정보", "과목별 통계"];
  return (
    <div className={cx("container")}>
      <h1>마이페이지</h1>
      <div className={cx("box")}>
        {list.map((el, idx) => (
          <div
            className={cx(tab === idx ? "clicked" : "")}
            onClick={() => setTab(idx)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
