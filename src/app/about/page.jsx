"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import image from "./images/team.jpeg";

const AboutPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(offset);

  return (
    <div className={styles.main}>
      <h1
        className={styles.heading}
        style={{ transform: `translateX(${offset * 1}px)` }}
      >
        About Us
      </h1>

      <div
        className={styles.box}
        style={{
          transform: `translateY(calc(-${offset * 0.5}px))`,
        }}
      >
        <div className={styles.glassyBox}>
          <p>
            We are a passionate team of App Developers dedicated to creating
            apps that make people&apos;s lives easier and more enjoyable. Our
            core mission is to understand and serve the unique needs of each
            client, ensuring we deliver the best possible solutions.
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
