import React from "react";

import Spacer from "@/atoms/spacer";
import Jumbotron from "@/molecules/jumbotron";
import CenteredMouse from "@/molecules/centered-mouse";

import styles from "./program.scss";

export default () => {
  return (
    <>
      <Jumbotron
        title="프로그램"
        subTitle="PROGRAM"
        description={
          <>
            각 분야의 전문가, 그리고 학생들이 모여 <br />
            다양한 주제와 알찬 내용으로
            <br />
            즐겁고 유의미한 행사를 구성하였습니다.
          </>
        }
      />
      <CenteredMouse />
    </>
  );
};
