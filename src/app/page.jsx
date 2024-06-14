import AboutPage from "./about-home/page";
import styles from "./page.module.css";
// import { sansation } from "./styles/fonts";
import TeamsPage from "./teams/page";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <div className={styles.container}>
        <div className={styles.home}>
          <p>
            Crafting Purposeful <span className={styles.span}>Apps</span> for
            Tomorrow&apos;s Needs
          </p>
          <p className={styles.subheading}>
            Innovative Solutions for a Changing World
          </p>
          <div className={styles.btns}>
            <button className={styles.button1}>
              <span>Get Started</span>
            </button>
            <button className={styles.button}>Learn More</button>
          </div>
        </div>
        <AboutPage />
        <TeamsPage />
      </div>
    </>
  );
}
