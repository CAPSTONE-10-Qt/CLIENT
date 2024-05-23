"use client";

import { useState, useEffect } from "react";
import { modelFER } from "@service/api/model";
import { postFace } from "@service/api/interviewDuring";

import { useRecoilValue } from "recoil";
import { interviewState } from "@store/interview";

export const usePostFace = (url: string | null, id: string) => {
  const [data, setData] = useState<FormData>();
  const { isRunning, done } = useRecoilValue(interviewState);
  useEffect(() => {
    if (!url) return;
    const formData = new FormData();
    formData.append("file", url.replace("data:image/jpeg;base64,", ""));
    formData.append("pk", `${id}`);
    setData(formData);
  }, [url]);
  useEffect(() => {
    if (!data || !isRunning || done) return;
    modelFER(data)
      .then(res => {
        console.log(res);
        const { pk, emotion } = res.data;
        if (emotion)
          postFace(pk, { emotion: emotion })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        else console.log("Error - emotion is null");
      })
      .catch(err => console.log(err));
  }, [data, isRunning, done]);
};
