"use client";

import { useState, useCallback } from "react";

export const useRecord = (
  onRec: boolean,
  setOnRec: (value: boolean) => void,
) => {
  const [stream, setStream] = useState<MediaStream>();
  const [media, setMedia] = useState<MediaRecorder>();
  const [source, setSource] = useState<MediaStreamAudioSourceNode>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode>();
  const [audioUrl, setAudioUrl] = useState<Blob>();

  const onRecord = () => {
    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream: MediaStream) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream: MediaStream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();
        setStream(stream);
        setMedia(mediaRecorder);
        makeSound(stream);
        analyser.onaudioprocess = function (e) {
          setOnRec(false);
        };
      });
  };

  const offRecord = () => {
    if (media && stream && analyser && source) {
      media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setOnRec(true);
      };
      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });
      media.stop();
      analyser.disconnect();
      source.disconnect();
    }
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl));
      const sound = new File([audioUrl], "soundBlob", {
        lastModified: new Date().getTime(),
      });
      console.log(sound, audioUrl);
    }
  }, [audioUrl]);

  return { onRecord, offRecord, onSubmitAudioFile };
};
