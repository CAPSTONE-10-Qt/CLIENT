"use client";

import { useState, useEffect } from "react";
import { modelFER } from "@service/api/model";
import { postFace } from "@service/api/interviewDuring";

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
