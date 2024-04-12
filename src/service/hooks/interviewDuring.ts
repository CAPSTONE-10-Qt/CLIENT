"use client";

import { useState, useEffect } from "react";
import { modelFER, modelSTT } from "@service/api/model";
import { postFace, postAnswer } from "@service/api/interviewDuring";

export const usePostFace = (url: string | null, id: string) => {
  const [data, setData] = useState<FormData>();
  useEffect(() => {
    if (!url) return;
    const formData = new FormData();
    formData.append("file", url);
    formData.append("pk", `${id}`);
    setData(formData);
  }, [url]);
  useEffect(() => {
    if (!data) return;
    modelFER(data)
      .then(res => {
        console.log("FER response", res);
        const { interviewQuestionId, emotion } = res.data;
        postFace(interviewQuestionId, emotion)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [data]);
};

export const usePostAnswer = (audio: Blob, id: string) => {
  const onSubmitAudioFile = new Promise(function (resolve, reject) {
    if (audio) {
      const sound = new File([audio], "soundBlob", {
        lastModified: new Date().getTime(),
      });
      const formData = new FormData();
      formData.append("file", sound);
      formData.append("pk", `${id}`);
      modelSTT(formData)
        .then(res => {
          console.log(res);
          const { interviewQuestionId, mumble, silent, talk, time, text } =
            res.data;
          postAnswer(interviewQuestionId, {
            mumble,
            silent,
            talk,
            time,
            text,
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
      resolve(true);
    }
  });
  return { onSubmitAudioFile };
};
