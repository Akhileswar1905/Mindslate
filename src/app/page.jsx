import AboutPage from "./about/page";
import styles from "./page.module.css";
import TeamsPage from "./teams/page";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className={styles.home}>
          <div className={styles.glassyBox}>
            <p>“ CRAFTING PURPOSEFUL APPS FOR TOMORROW’S NEEDS “</p>
          </div>
        </div>
        <AboutPage />
        <TeamsPage />
      </div>
    </>
  );
}
