import React from "react";
import styles from "../styles/Home.module.scss";

export default function BodySectionA(style1, style2, title) {
  return (
    <div className={styles.bodyOne}>
      <p className={styles.title}>About</p>
      <div className={styles.bodyBlockA}>
        <div className={styles.content}>
          <p className={styles.contentTitle}>Yours truly.</p>
          <p>
            Highly adaptable and creative individual with strong business acumen
            able to solve common and complex organizational issues driving
            growth and transformation. Trained in full-stack development,
            building modern ground up web applications. Seeking innovative teams
            developing cutting edge applications using new and established
            technologies. Here are some things I have worked on. ↴
          </p>
          <p>
            In my Personal life... The outdoors call me, and I try to spend as
            much time there as I can. Whether it's a walk through our local park
            or a multi-day backpacking trip, I'm game. Then there is the more
            obvious passion - technology. I love seeing how technology can
            change the world, and hopefully in ways which benefit the people who
            use them.
          </p>
        </div>
      </div>
    </div>
  );
}
