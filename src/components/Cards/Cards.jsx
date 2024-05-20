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
  color,
  linkedin,
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
          <a href={linkedin} target="_blank">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <MdOutlineAlternateEmail />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
