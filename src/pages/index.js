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
          <table>
            <tbody>
              <tr>
                <th>장소</th>
                <td>장소장소장소</td>
              </tr>
              <tr>
                <th>일시</th>
                <td>2019-02-15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
      <CenteredMouse />
      <div className={cx(commonCss.section, styles.introduce)}>
        <Diagonal className={styles.introduceDiagonal} />
        <div className={cx(commonCss.sectionBox, commonCss.sectionContent)}>
          <h2>“누구나 강연 할 수 있고 누구나 학생이 될 수 있다”. </h2>
          <hr />
          <p>
            디시인사이드의 개방성을 모토로 현직 개발자와 개발자 꿈나무 등 다양한
            계층으로 이루어진 프로그래밍 갤러리 이용자들간의 기술교류를 통해
            프로그래밍 갤러리의 활성화와 더불어 이용자들의 프로그래밍 능력 향상
            및 네트워크 기반을 활성합니다.
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
              누구나 강연 하고 누구나 참관할 수 있는 컨퍼런스를 통해 구성원들의
              프로그래밍 지식 교류의 장을 만듦
            </li>
            <li>
              컨퍼런스를 계기로 프로그래밍 갤러리 내 다양한 계층의 교류활동을
              활성화하고 이를 통해 갤러리 이용자들의 프로그래밍 지식과 기술
              교류에 이바지
            </li>
            <li>
              프로그래밍 갤러리에서의 교류를 통해 양질의 정보가 생산되고 이를
              통해 외부 이용자들을 끌어들일 수 있는 정보생산성의 증대를 통한
              갤러리 활성화
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
            디시인사이드 프로그래밍 갤러리의 이용자들과 함께 첫 프로그래밍
            갤러리 컨퍼런스를 추진하게 되었습니다.
          </p>
          <p>
            디시인사이드는 여타 커뮤니티와 다르게 예의나 체면치레에서 자유로운
            커뮤니티이며, 그 덕에 나이와 계층을 뛰어넘고 다양한 계층의
            프로그래밍 이야기를 한 곳에서 담아낼 수 있는 유일무이한 커뮤니티가
            되었습니다.
          </p>
          <p>
            이번 컨퍼런스에서는 디시인사이드의 자유로운 분위기를 컨퍼런스에
            담아내어 “누구나 강연할 수 있고, 누구나 정보를 얻어갈 수 있는”
            컨퍼런스를 만드는 것입니다.
          </p>
          <p>
            이를 통해 디시인사이드 프로그래밍 갤러리의 활성화와 함께 다양한
            프로그래밍 지식과 정보, 철학을 공유하고 나누는 장을 만들어
            궁극적으로는 생산성높은 커뮤니티를 만드는 데에 그 목적이 있습니다.
          </p>
          <p>
            생산성 높은 커뮤니티 페이지는 그 정보만으로 다양한 인터넷 이용자들의
            발걸음을 끌어당기는데 도움이 됩니다. 이번 컨퍼런스를 계기로
            프로그래밍 갤러리가 자유롭게 양질의 정보를 나눌 수 있는 장이 된다면
            디시인사이드에도 도움이 되지 않을까 기대하고 있습니다.
          </p>
        </div>
      </div>
    </>
  );
};
