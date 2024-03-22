"use client";

import React, { useState } from "react";
import Button from "@components/Button";
import { CSSubjectList } from "./data";

const SetupForm = () => {
  const [form, setForm] = useState<InterviewSetupFormType>({
    subjectText: "",
    questionNum: 0,
    onlyVoice: false,
  });
  return (
    <div>
      {CSSubjectList.map(item => (
        <Button
          text={item.text}
          largeSubtext={item.largeSubtext}
          smallSubtext={item.smallSubtext}
          state={form.subjectText === item.text}
          onClick={() => setForm({ ...form, subjectText: item.text })}
        />
      ))}
    </div>
  );
};

export default SetupForm;
