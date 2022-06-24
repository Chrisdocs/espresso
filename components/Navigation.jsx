import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useWindowSize } from "@react-hook/window-size";

export default function Nav() {
  const [width, height] = useWindowSize({ fps: 60 });

  const [windowSize, setWindowSize] = useState(null);
  useEffect(() => setWindowSize(width));

  if (windowSize > 450) {
    return (
      <div className={styles.deskopNav}>
        <a href="#home" className={styles.active}>
          Logo
        </a>
        <div className={styles.pages}>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
        <a href="javascript:void(0);" className={styles.icon} onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    );
  } else {
    return (
      <div className={styles.mobileNav}>
        <a href="#home" className={styles.active}>
          Logo
        </a>
        <div className={styles.pages}>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </div>
        <a href="javascript:void(0);" className={styles.icon} onclick="myFunction()">
          <i className={styles.bars}></i>
        </a>
      </div>
    );
  }
}
