import React from "react";

import Spacer from "@/atoms/spacer";
import Jumbotron from "@/molecules/jumbotron";

import styles from "./program.scss";

export default () => {
  return (
    <>
      <Jumbotron
        title="프로그램"
        subTitle="PROGRAM"
        description={
          <>
            각 분야의 전문가, 혹은 학생이 모여 <br />
            다양한 주제와 알찬 내용으로
            <br />
            유의미한 행사를 구성하였습니다.
          </>
        }
      />
    </>
  );
};
