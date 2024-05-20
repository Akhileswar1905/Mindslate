"use client";
import styles from "./teams.module.css";
import { data } from "./data";
import Cards from "@/components/Cards/Cards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
const TeamsPage = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={styles.main}>
      <h1 className={styles.heading}>Meet Our Team</h1>
      {data.map((item, index) => {
        const targetScale = 1 - (data.length - index) * 0.05;

        return (
          <Cards
            key={index}
            {...item}
            i={index}
            progress={scrollYProgress}
            range={[index * 0.25, data.length * 0.25 + 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default TeamsPage;
