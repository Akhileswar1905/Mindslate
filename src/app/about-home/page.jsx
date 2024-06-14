"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import image from "./images/team.jpeg";

const AboutPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.main}>
      <h1
        className={styles.heading}
        style={{ transform: `translateX(${offset * 1}px)` }}
      >
        <span className="span">About</span> Us
      </h1>

      <div
        className={styles.box}
        style={{
          transform: `translateY(calc(-${offset * 0.5}px))`,
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
