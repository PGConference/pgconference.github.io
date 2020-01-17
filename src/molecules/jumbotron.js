import React from "react";
import { motion } from "framer-motion";

import Spacer from "@/atoms/spacer";
import Diagonal from "@/atoms/diagonal";

import styles from "./jumbotron.scss";

const paragraphVars = {
  initial: { x: -10, opacity: 0, transition: { ease: "circIn" } },
  animate: { x: 0, opacity: 1, transition: { ease: "circOut" } }
};

export default ({ title, subTitle, description }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 }
      }}
      transition={{ staggerChildren: 0.1, ease: "backOut" }}
      initial="initial"
      animate="animate"
      exit="initial"
      className={styles.wrap}
    >
      <Diagonal className={styles.diagonal} />
      <Spacer />
      <div className={styles.box}>
        <motion.h1 variants={paragraphVars}>{title}</motion.h1>
        <motion.h2 variants={paragraphVars}>{subTitle}</motion.h2>
        <motion.p variants={paragraphVars}>{description}</motion.p>
      </div>
    </motion.div>
  );
};
