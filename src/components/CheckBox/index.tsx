import { CheckTrue, CheckFalse } from "../../../public/svgs";
import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

type Props = {
  state: boolean;
  onClick: (value: any) => void;
};
const CheckBox = ({ state, onClick }: Props) => {
  return (
    <div className={cx("button")} onClick={onClick}>
      {state ? <CheckTrue /> : <CheckFalse />}
    </div>
  );
};

export default CheckBox;
