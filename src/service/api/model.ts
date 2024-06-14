import { modelClient } from ".";

export const modelSTT = async (body: FormData) => {
  const url = `/model/stt`;
  return modelClient.post(url, body);
};

export const modelFER = async (body: FormData) => {
  const url = `/model/fer`;
  return modelClient.post(url, body);
};

type TTSBodyType = {
  questionList: { id: number; questionText: string }[];
};
export const modelTTS = async (body: TTSBodyType) => {
  const url = `/model/tts`;
  return modelClient.post(url, body);
};
