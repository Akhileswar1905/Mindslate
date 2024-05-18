import styles from "./Cards.module.css";
const Cards = (id, name, role, image, desc) => {
  console.log(name);
  return <div className={styles.container}>{name}</div>;
};

export default Cards;
