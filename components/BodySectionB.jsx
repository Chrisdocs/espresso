import React from "react";
import styles from "../styles/Home.module.scss";

export default function BodySectionB() {
  return (
    <div className={styles.bodyTwo}>
      <p className={styles.title}>TITLE</p>
      <div className={styles.bodyBlockTwo}>
        <div className={styles.content}>
					<p className={styles.contentTitle}>Title</p>
          <p>And wouldn't you believe it, a THIRD section for text - IN your third section! Amazing!</p>
        </div>
      </div>
    </div>
  );
}
