import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import smapi from "../public/smapi.png";
import bike from "../public/bike.png";
import md from "../public/md.png";
import dnd from "../public/dnd.png";
import { useWindowSize } from "@react-hook/window-size";

export default function Card() {
  const [width, height] = useWindowSize({ fps: 60 });
  console.log("window width: ", width, "window height: ", height);

  let projects = [
    {
      name: "Social API",
      about: "An API for managing the backend in a social application",
      tech: "Express Luxon MongoDB Mongoose Node",
      github: "https://github.com/Chrisdocs/SocNetAPI",
      web: "https://github.com/Chrisdocs/SocNetAPI",
      img: smapi,
      alt: "graphic reading API",
      key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    },
    {
      name: "BikeSleuth",
      about: "A web app for keeping track of your bikes",
      tech: "Express Apollo GraphQL JWT Bcrypt Mongoose React Node",
      github: "https://github.com/Chrisdocs/FindMyBike",
      web: "https://bikesleuth.herokuapp.com/#/",
      img: bike,
      alt: "Graphic with bike",
      key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    },
    {
      name: "Readme Gen",
      about: "Terminal Program for generating Readme.md's",
      tech: "FS Inquirer Markdown-toc",
      github: "https://github.com/Chrisdocs/Readme-Gen",
      web: "https://github.com/Chrisdocs/Readme-Gen",
      img: md,
      alt: "graphic reading .md",
      key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    },
    {
      name: "D&D Map App",
      about: "Little web app so my friends can navigate my D&D world map",
      tech: "React Leaflet",
      github: "https://chrisdocs.github.io/darksky/",
      web: "https://chrisdocs.github.io/darksky/",
      img: dnd,
      alt: "graphic with dragon",
      key: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    },
  ];

  if (width >= 450) {
    return (
      <div>
        <h3 className={styles.projectText}>
          Explore through my GitHub{" "}
          <a
            href="https://github.com/Chrisdocs"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >{`→`}</a>
        </h3>
        <div className={styles.cardCont}>
          {projects.map((project, index) => {
            return (
              <div className={styles.flip} key={index}>
                <div className={styles.card}>
                  <div className={styles.cardFront} id="face">
                    <Image
                      className={styles.cardImg}
                      src={project.img}
                      alt={project.alt}
                      width={240}
                      height={240}
                    ></Image>
                  </div>
                  <div className={styles.cardBack} id="face">
                    <a target="_blank" rel="noreferrer" href={project.github}>
                      <h3>{project.name}</h3>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.mobilePContainer}>
          <h3 className={styles.mobileText}>
            Explore through my GitHub{" "}
            <a
              href="https://github.com/Chrisdocs"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
            >{`→`}</a>
          </h3>
          <div className={styles.mobileCard}>
            {projects.map((project, index) => {
              return (
                <div className={styles.each} key={index}>
                  <div className={styles.mobileImgContainer} id="face">
                    <Image
                      className={styles.mobileCardImg}
                      src={project.img}
                      alt={project.alt}
                      width={240}
                      height={240}
                    ></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
