import AboutPage from "./about-home/page";
import styles from "./page.module.css";
import TeamsPage from "./teams/page";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <div className={styles.container}>
        <div className={styles.home}>
          <div className={styles.glassyBox}>
            <p>“CRAFTING PURPOSEFUL APPS FOR TOMORROW’S NEEDS“</p>
          </div>
        </div>
        <AboutPage />
        <TeamsPage />
      </div>
    </>
  );
}
