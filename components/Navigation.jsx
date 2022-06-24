import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useWindowSize } from "@react-hook/window-size";
import logo from '../public/logo.png';

export default function Nav() {
  const [width, height] = useWindowSize({ fps: 60 });
  const [isNavExpanded, setIsNavExpanded] = useState(false);

	console.log(isNavExpanded);

  const [windowSize, setWindowSize] = useState(null);
  useEffect(() => setWindowSize(width));

  if (windowSize > 850) {
    return (
			<nav id="nav" className={styles.desktopNav}>
      <div className={styles.navLeft}>
          <a className={styles.topBtn} onClick={top}>
						<Image
							src={logo}
							height={40}
							width={40}
							alt="logo"
						/>
					</a>
      </div>
      <div className={styles.navRight}>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#projects">
          <a>Projects</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
        <a download href="resume.pdf" className={styles.resumeBtn}>{`Resume ↓`}</a>
      </div>
    </nav>
    );
  } else {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          <Image
						src={logo}
						height={35}
						width={40}
					/>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link href="#about">
                <a onClick={() => setIsNavExpanded(false)}>About</a>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <a onClick={() => setIsNavExpanded(false)}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a onClick={() => setIsNavExpanded(false)}>Contact</a>
              </Link>
            </li>
            <li>
              <a
                download
                href="resume.pdf"
                className="resumeBtn"
              >{`Resume ↓`}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
