import React from "react";
import styles from "./centered-mouse.scss";

import Mouse from "@/atoms/mouse";

export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <Mouse />
      </div>
    </div>
  );
};
