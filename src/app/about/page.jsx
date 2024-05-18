import Image from "next/image";
import styles from "./about.module.css";
import image from "./images/team.jpeg";
const AboutPage = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>About Us</h1>
      <div className={styles.glassyBox}>
        <p>
          We are a passionate team of App Developers dedicated to creating apps
          that make people&apos;s lives easier and more enjoyable. Our core
          mission is to understand and serve the unique needs of each client,
          ensuring we deliver the best possible solutions.
        </p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt="team" />
      </div>
    </div>
  );
};

export default AboutPage;
