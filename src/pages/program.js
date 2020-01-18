import React, { createContext } from "react";
import cx from "classnames";

import commonCss from "@/styles/common.scss";
import Spacer from "@/atoms/spacer";
import Diagonal from "@/atoms/Diagonal";
import Jumbotron from "@/molecules/jumbotron";
import CenteredMouse from "@/molecules/centered-mouse";

import styles from "./program.scss";
import programList from "@/data/program.json";

export default () => {
  return (
    <>
      <Jumbotron
        title="프로그램"
        subTitle="PROGRAM"
        bgClassName={styles.jumbotronBg}
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
      <div className={cx(commonCss.section, styles.items)}>
        <div className={cx(commonCss.sectionBox, styles.itemsBox)}>
          {programList.map((programItem, i) => (
            <div key={i} className={cx(styles.item)}>
              <Diagonal className={cx(styles.itemDiagonal)} />
              <div className={cx(styles.itemContent)}>
                <h1>{programItem.title}</h1>
                <h2>
                  강사 : <strong>{programItem.author}</strong>
                </h2>
                <hr />
                <p>{programItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
