import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useWindowSize } from "@react-hook/window-size";

export default function Nav() {
  const [width, height] = useWindowSize({ fps: 60 });
  const [isNavExpanded, setIsNavExpanded] = useState(false);

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
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onclick="myFunction()"
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    );
  } else {
    return (
      // <div className={styles.mobileNav}>
      //   <a href="#home" className={styles.active}>
      //     Logo
      //   </a>
      //   <button className={styles.hamburger} onClick={() => {
      // 		setIsNavExpanded(!isNavExpanded)
      // 	}}
      // 	>
      //     {/* icon from heroicons.com */}
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="h-5 w-5"
      //       viewBox="0 0 20 20"
      //       fill="white"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
      //         clipRule="evenodd"
      //       />
      //     </svg>
      //   </button>
      //   <div className={isNavExpanded ? "pages expanded" : "pages"}>
      //     <ul>
      //       <li>
      //         <Link href="#about">
      //           <a>About</a>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href="#projects">
      //           <a>Projects</a>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href="#contact">
      //           <a>Contact</a>
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      //   <a
      //     href="javascript:void(0);"
      //     className={styles.icon}
      //     onclick="myFunction()"
      //   >
      //     <i className={styles.bars}></i>
      //   </a>
      // </div>
      <nav className="navigation">
        <a href="/" className="brand-name">
          Logo
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
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
