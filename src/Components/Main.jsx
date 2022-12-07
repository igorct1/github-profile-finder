import React from "react";
import styles from "./Main.module.css";

export const Main = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
