import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

import styles from "./diagonal.scss";

export default ({ className, deg = -3, children, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { skewY: 0 },
        animate: {
          skewY: deg
        }
      }}
      initial="initial"
      animate="animate"
      exit="initial"
      className={cx(styles.wrap, className)}
      {...rest}
    >
      <motion.div className={cx(styles.inner)} style={{ skewY: -1 * deg }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
