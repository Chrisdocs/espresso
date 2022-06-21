import React from "react";
import styles from "../styles/Home.module.scss";

export default function BodySectionA(style1, style2, title) {
  return (
    <div className={styles.bodyA}>
      <p className={styles.title}>TITLE</p>
      <div className={styles.bodyBlockA}>
        <div className={styles.content}>
					<p className={styles.contentTitle}>Title</p>
          <p>You can put even more text down here! Woah!</p>
        </div>
      </div>
    </div>
  );
}
