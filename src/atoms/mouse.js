import React from "react";
import { motion } from "framer-motion";

import styles from "./mouse.scss";

export default () => {
  return (
    <motion.div
      variants={{
        initial: { y: 0 },
        animate: {
          y: [0, 10, 10, 10, 0],
          transition: { loop: Infinity, repeatDelay: 1 }
        }
      }}
      initial="initial"
      animate="animate"
      exit="initial"
      className={styles.wrap}
    >
      <motion.div
        variants={{
          animate: {
            y: [0, 10, 10, 0],
            transition: { loop: Infinity, repeatDelay: 1 }
          }
        }}
        className={styles.wheel}
      ></motion.div>
    </motion.div>
  );
};
