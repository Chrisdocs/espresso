import React from "react";
import styles from "../styles/Home.module.scss";
import Projects from "./Projects";

export default function BodySectionB() {
  return (
    <div className={styles.bodyTwo} id="projects">
      <p className={styles.title}>Projects</p>
      <div className={styles.bodyBlockTwo}>
        <div className={styles.content}>
					<Projects />
        </div>
      </div>
    </div>
  );
}
