import React from "react";
import { motion } from "framer-motion";

import Spacer from "@/atoms/spacer";

import utilCss from "@/styles/utils.scss";
import styles from "./index.scss";

export default () => {
  return (
    <>
      <div className={styles.heroClipper}>
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
          <Spacer />
          <div className={styles.heroBox}>
            <h2>
              <strong>누구나 자유롭게 발표</strong>하고,
              <br />
              <span className={utilCss.noWrap}>
                <strong>누구나 학생</strong>이
              </span>
              <span className={utilCss.noWrap}>될 수 있다!</span>
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
                  <td>2019-02-17</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </>
  );
};
