"use client";
import Image from "next/image";
import styles from "./Cards.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { motion, useTransform } from "framer-motion";

const Cards = ({
  id,
  name,
  role,
  image,
  desc,
  quote,
  color,
  linkedin,
  github,
  email,
  i,
  progress,
  range,
  targetScale,
}) => {
  // Calculate scale based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  console.log(scale);
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`, // Adjust top position as needed
          scale: scale, // Apply the scale transformation
        }}
      >
        <div className={styles.image}>
          <Image src={image} alt="person" width={200} height={200} />
          <div className={styles.devDetails}>
            <h2>{name}</h2>
            <p>{role}</p>
          </div>
        </div>
        <div className={styles.quote}>&quot;{quote}&quot;</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.icons}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <MdOutlineAlternateEmail />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
