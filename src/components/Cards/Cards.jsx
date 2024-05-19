"use client";
import Image from "next/image";
import styles from "./Cards.module.css";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { motion, useTransform } from "framer-motion";
const Cards = ({
  id,
  name,
  role,
  image,
  desc,
  color,
  i,
  progress,
  range,
  targetScale,
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
          scale,
        }}
      >
        <div className={styles.image}>
          <Image src={image} alt="person" width={200} height={200} />
          <div className={styles.devDetails}>
            <h2>{name}</h2>
            <p>{role}</p>
          </div>
        </div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.icons}>
          <FaLinkedin />
          <FaGithub />
          <FaInstagramSquare />
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
