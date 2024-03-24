import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const Description = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("paragraph")}>
        <p>⏰</p>
        <p>
          질문당 제한시간은 60초입니다.
          <br />
          주어진 시간이 모두 경과되면 자동으로 답변 녹화가 종료되고 다음
          질문으로 넘어가니 주의해주세요!
        </p>
      </div>
      <div className={cx("paragraph")}>
        <p>📸</p>
        <p>
          질문에 대한 답변이 시작되면 카메라와 마이크를 이용하여 면접자
          녹화/녹음을 진행합니다.
          <br />
          만약 녹화를 원치 않으시면 아래 옵션에서 음성으로만 면접 진행을
          선택하실 수 있습니다.
          <br />
          단, 음성 면접의 경우 표정 등의 비언어적 표현 분석 결과가 온전히 제공될
          수 없으므로 가급적 녹화를 포함한 화상 면접으로 진행하는 것을
          추천드립니다.
        </p>
      </div>
      <div className={cx("paragraph")}>
        <p>🚨</p>
        <p>
          면접 중 종료하기 버튼을 눌러 면접에서 나가면 질문과 답변을 포함한 모든
          기록이 저장되지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default Description;
