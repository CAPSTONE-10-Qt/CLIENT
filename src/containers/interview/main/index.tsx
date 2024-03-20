import type { GetStaticProps, InferGetStaticPropsType } from "next";

import WebCam from "./WebCam";

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("service/api/function");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const InterviewMainContainer = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <WebCam />
    </>
  );
};

export default InterviewMainContainer;
