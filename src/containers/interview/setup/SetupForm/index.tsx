"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { isLoginState } from "@store/auth";
import {
  interviewDataState,
  interviewTTSState,
  interviewState,
} from "@store/interview";

import { fillSetupFormInterview } from "@utils/alerts/interview";
import { loginToUse } from "@utils/alerts/auth";
import { CSSubjectList, QuestionList } from "./data";
import { modelTTS } from "@service/api/model";
import { postInterview } from "@service/api/interviewDuring";

import Description from "../Description";
import RoundButton from "@components/RoundButton";
import RectButton from "@components/RectButton";
import CheckBox from "@components/CheckBox";

import styles from "./index.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const SetupForm = () => {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginState);
  const [form, setForm] = useState<InterviewSetupFormType>({
    subjectText: "",
    questionNum: 0,
    onlyVoice: false,
  });
  const resetState = useResetRecoilState(interviewState);
  const [interview, setInterview] = useRecoilState(interviewDataState);
  const [tts, setTTS] = useRecoilState(interviewTTSState);
  const resetTTS = useResetRecoilState(interviewTTSState);
  useEffect(() => {
    resetTTS();
    resetState();
  }, []);
  const onSubmit = () => {
    if (form.subjectText == "" || form.questionNum === 0) {
      fillSetupFormInterview();
    } else {
      if (isLogin)
        postInterview({
          subjectText: form.subjectText,
          questionNum: form.questionNum,
          onlyVoice: form.onlyVoice,
          startDateTime: new Date().toLocaleString("ko-KR", {
            hour12: false,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        })
          .then(res => {
            console.log(res.data.data);
            setInterview({
              ...res.data.data,
              currentIndex: 0,
              isMicOn: false,
              isSpeakerOn: true,
            });
            router.push(`/interview/${res.data.data.id}`);
            modelTTS({ questionList: res.data.data.questionList })
              .then(res => {
                console.log(res.data);
                setTTS({ ...tts, files: res.data.voiceList });
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      else loginToUse(() => router.push("/login"));
    }
  };
  return (
    <div className={cx("container")}>
      <div className={cx("title", "top")}>
        📖 면접을 진행할 CS 과목을 선택해주세요
      </div>
      <div className={cx("button-container")}>
        {CSSubjectList.map(item => (
          <RoundButton
            key={item.text}
            text={item.text}
            largeSubtext={item.largeSubtext}
            smallSubtext={item.smallSubtext}
            state={form.subjectText === item.text}
            onClick={() => setForm({ ...form, subjectText: item.text })}
          />
        ))}
      </div>
      <div className={cx("title")}>
        ❔ 모의 면접을 진행할 질문 개수를 선택해주세요
      </div>
      <div className={cx("button-container", "three")}>
        {QuestionList.map(item => (
          <RoundButton
            key={item.text}
            text={`${item.text}개`}
            smallSubtext={item.smallSubtext}
            state={form.questionNum === item.text}
            onClick={() => setForm({ ...form, questionNum: item.text })}
            staticWidth={100}
          />
        ))}
      </div>
      <div className={cx("title")}>
        ✅ 아래 유의사항을 확인 후 면접을 시작해주세요
      </div>
      <Description />
      <div className={cx("checkbox-container")}>
        <CheckBox
          state={form.onlyVoice}
          onClick={() => setForm({ ...form, onlyVoice: !form.onlyVoice })}
        />
        <p onClick={() => setForm({ ...form, onlyVoice: !form.onlyVoice })}>
          음성으로만 면접을 진행하고 싶어요.
        </p>
      </div>
      <RectButton text='면접 시작' onClick={onSubmit} />
    </div>
  );
};

export default SetupForm;
