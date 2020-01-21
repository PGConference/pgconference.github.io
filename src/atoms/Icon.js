import React from "react";
import cx from "classnames";
import { Icon } from "@mdi/react";

import styles from "./Icon.scss";

export default ({ className, ...rest }) => {
  return (
    <Icon
      className={cx(styles.wrap, className)}
      size="1em"
      color="currentColor"
      {...rest}
    />
  );
};
