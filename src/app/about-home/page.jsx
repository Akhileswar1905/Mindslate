"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import image from "./images/team.jpeg";

const AboutPage = () => {
  const [offset, setOffset] = useState(0);
  const [style, setStyle] = useState({});
  const [flag, setFlag] = useState(true);
  const xoffset = 1;
  const yoffset = 0.5;

  useEffect(() => {
    if (typeof window !== "undefined") {
      let style = { transform: `translateX(${offset * xoffset}px)` };
      if (window.innerWidth < window.innerHeight) {
        setFlag(false);
        style = { transform: `translateX(${offset * 0.1}px)` };
      }
      setStyle(style);

      const handleScroll = () => {
        setOffset(
          window.scrollY > window.scrollX ? window.scrollY : window.scrollX
        );
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [offset, xoffset]);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading} style={style}>
        <span className="span">About</span> Us
      </h1>

      <div
        className={styles.box}
        style={{
          transform: `translateY(calc(-${offset * yoffset}px))`,
        }}
      >
        <div className={styles.glassyBox}>
          <p>
            Here at Mindslate, we develop next-generation mobile and web apps to
            tackle tomorrow&apos;s challenges. Our dedicated team of app
            developers, web developers, and UX designers harness the latest
            technologies to create intuitive, sustainable solutions that enhance
            lives and drive progress.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={image} alt="team" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
