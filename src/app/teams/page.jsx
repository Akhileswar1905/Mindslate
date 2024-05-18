import styles from "./teams.module.css";
import { data } from "./data";
import Cards from "@/components/Cards/Cards";
const TeamsPage = () => {
  return (
    <div className={styles.main}>
      <h1>Meet Our Team</h1>
      <div className={styles.container}>
        {data.map((item, index) => {
          {
            console.log(item);
          }
          return <Cards key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TeamsPage;
