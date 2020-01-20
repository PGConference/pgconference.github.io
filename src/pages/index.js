import React from "react";
import cx from "classnames";
import { motion } from "framer-motion";

import utilCss from "@/styles/utils.scss";
import commonCss from "@/styles/common.scss";
import Diagonal from "@/atoms/Diagonal";
import CenteredMouse from "@/molecules/centered-mouse";

import styles from "./index.scss";

export default () => {
  return (
    <>
      <motion.div
        variants={{
          initial: { scale: 1.33, rotate: 5, opacity: 0 },
          animate: { scale: 1, rotate: 0, opacity: 1 }
        }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        initial="initial"
        animate="animate"
        exit="initial"
        className={styles.hero}
      >
        <Diagonal className={styles.heroDiagonal}>
          <div className={styles.heroBg} />
        </Diagonal>
        <div className={styles.heroBox}>
          <h2>
            <strong>누구나 강연</strong>하고,
            <br />
            <span className={utilCss.noWrap}>
              <strong>누구나 학생</strong>이 될 수 있다!
            </span>
          </h2>
          <hr />
          <h1>
            PROGRAMMING
            <br />
            GALLERY
            <br />
            CONFERENCE
            <br />
            <strong>2020</strong>
          </h1>
          <hr />
          <h3>
            프로그래밍 갤러리 컨퍼런스 <strong>2020</strong>
          </h3>
          <p>
            <a className={styles.registerButton}>지금 참가신청하기</a>
          </p>
          <table className={commonCss.table}>
            <tbody>
              <tr>
                <th>일시</th>
                <td>2019-02-15 오후 2:30</td>
              </tr>
              <tr>
                <th>장소</th>
                <td>
                  서울특별시 강남구 역삼동 662-14 에이비티타워 2F{" "}
                  <strong>코스토리 스페이스 세미나실</strong>
                </td>
              </tr>
              <tr>
                <th>문의</th>
                <td>pgconferencereserve@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
      <CenteredMouse />
      <div className={cx(commonCss.section, styles.introduce)}>
        <Diagonal className={styles.introduceDiagonal} />
        <div className={cx(commonCss.sectionBox, commonCss.sectionContent)}>
          <h2>“누구나 강연할 수 있고 누구나 학생이 될 수 있다”. </h2>
          <hr />
          <p>
            디시인사이드의 <strong>개방성</strong>을 모토로
            <br /> 프로그래밍 갤러리 유저들 간 <strong>기술교류</strong>를 통해
            <br /> 유저들의 <strong>프로그래밍 능력을 향상</strong>시키고{" "}
            <strong>네트워킹을 활성화</strong>합니다.
          </p>
        </div>
      </div>
      <div className={cx(commonCss.section, styles.goals)}>
        <Diagonal className={styles.goalsDiagonal}></Diagonal>
        <div className={cx(commonCss.sectionBox, commonCss.sectionContent)}>
          <h1>OUR GOALS</h1>
          <hr />
          <ol>
            <li>
              <p>
                <strong>누구나 강연</strong>하고 <strong>누구나 참관</strong>할
                수 있는 컨퍼런스를 통해 구성원들의 프로그래밍{" "}
                <strong>지식 교류의 장</strong>을 만듦
              </p>
            </li>
            <li>
              <p>
                컨퍼런스를 계기로 프로그래밍 갤러리 내{" "}
                <strong>다양한 계층의 교류</strong>를 활성화하고 이를 통해
                유저들 간 프로그래밍 지식과 기술 교류에 이바지
              </p>
            </li>
            <li>
              <p>
                프로그래밍 갤러리에서의 교류를 통해 양질의 정보가 생산되고 이를
                통해 외부 이용자들을 끌어들일 수 있는{" "}
                <strong>정보생산성의 증대</strong>
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className={cx(commonCss.section, styles.about)}>
        <Diagonal className={styles.aboutDiagonal} />
        <div className={cx(commonCss.sectionBox, commonCss.sectionContent)}>
          <h1>ABOUT PGC</h1>
          <hr />
          <p>
            디시인사이드 프로그래밍 갤러리 유저들과 함께{" "}
            <strong>첫 프로그래밍 갤러리 컨퍼런스</strong>를 추진하게
            되었습니다.
          </p>
          <p>
            디시인사이드는 여타 커뮤니티와 달리{" "}
            <strong>예의나 체면치레에서 자유</strong>로우며, 이를 통해{" "}
            <strong>나이와 환경</strong>을 뛰어넘고 <strong>다양한 배경</strong>
            에서 유래한 프로그래밍 이야기를 한 곳에서 담아낼 수 있는{" "}
            <strong>유일무이한 커뮤니티</strong>가 되었습니다.
          </p>
          <p>
            이번 컨퍼런스는 디시인사이드의 <strong>자유로운 분위기</strong>를
            담아내어 “누구나 강연할 수 있고, 누구나 정보를 얻어갈 수 있는”
            컨퍼런스가 되는 것을 목표로 합니다.
          </p>
          <p>
            이를 통해 디시인사이드 프로그래밍 <strong>갤러리의 활성화</strong>와
            함께 다양한 프로그래밍 지식과 정보, 철학을 공유하고 나누는 장을
            만들어 궁극적으로는 <strong>커뮤니티의 생산성</strong>을 높이는 데
            그 목적이 있습니다.
          </p>
          <p>
            커뮤니티 페이지의 <strong>높은 생산성</strong>은 그 하나만으로도
            다양한 인터넷 이용자들의 발걸음을 끌어당깁니다. 이번 컨퍼런스를
            계기로 프로그래밍 갤러리가 자유롭게 <strong>양질의 정보</strong>를
            나눌 수 있는 장이 된다면 디시인사이드에도 도움이 되지 않을까
            기대하고 있습니다.
          </p>
        </div>
      </div>
    </>
  );
};
