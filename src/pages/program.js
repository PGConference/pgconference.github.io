import React, { createContext } from "react";
import cx from "classnames";
import { mdiGithubCircle, mdiHomeCircle } from "@mdi/js";

import commonCss from "@/styles/common.scss";
import Icon from "@/atoms/Icon";
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
          {programList.map((item, i) => (
            <div key={i} className={cx(styles.item)}>
              <Diagonal className={cx(styles.itemDiagonal)} />
              <div className={cx(styles.itemContent)}>
                <span className={styles.itemNumber}>#{i + 1}</span>
                <h1>{item.title}</h1>
                <h2>
                  SPEAKER　<strong>{item.author}</strong>
                </h2>
                {(item.github || item.home) && (
                  <p>
                    {item.github && (
                      <a
                        className={cx(styles.linkButton, styles.githubButton)}
                        href={item.github}
                        target="_blank"
                      >
                        <Icon path={mdiGithubCircle} /> <strong>GITHUB</strong>
                      </a>
                    )}
                    {item.home && (
                      <a
                        className={cx(styles.linkButton, styles.homeButton)}
                        href={item.home}
                        target="_blank"
                      >
                        <Icon path={mdiHomeCircle} /> <strong>HOMEPAGE</strong>
                      </a>
                    )}
                  </p>
                )}
                <hr />
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
