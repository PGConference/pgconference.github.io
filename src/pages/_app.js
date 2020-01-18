import React from "react";
import NavLink from "@/atoms/nav-link";
import "normalize.css";
import { AnimatePresence } from "framer-motion";

import Diagonal from "@/atoms/diagonal";

import styles from "./_app.scss";

function App({ Component, pageProps, router }) {
  return (
    <>
      <div className={styles.header}>
        <Diagonal className={styles.headerDiagonal} style={{ originX: 0 }} />
        <div className={styles.headerLeft}>
          <NavLink href="/" asPath="/" activeClassName={styles.active}>
            <a className={styles.headerLogo}>
              <img src={require("@/assets/images/logo-white.svg")} />
            </a>
          </NavLink>
        </div>
        <div className={styles.headerRight}>
          <NavLink href="/" asPath="/" activeClassName={styles.active}>
            <a className={styles.headerLink}>소개</a>
          </NavLink>{" "}
          <NavLink href="/program" activeClassName={styles.active}>
            <a className={styles.headerLink}>프로그램</a>
          </NavLink>{" "}
          <NavLink href="/location" activeClassName={styles.active}>
            <a className={styles.headerLink}>오시는 길</a>
          </NavLink>
        </div>
      </div>
      <div className={styles.main}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
      <div className={styles.footer}>
        <Diagonal className={styles.footerDiagonal} direction="bottom" />
        <div className={styles.footerBox}>
          <div className={styles.footerLeft}>
            ⓒ 2020 PGC
            <br />
            <strong>문의</strong> pgconferencereserve@gmail.com
          </div>
          <div className={styles.footerRight}>
            본 행사는 <strong>디시인사이드</strong> 의 공식 후원을 받고
            있습니다.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
