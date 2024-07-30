import styles from "./app.module.css";
import Image from 'next/image';
import service_img from '../../../public/assets/app_dev_img.jpeg';
const Services = () => {
  return (
  <div className={styles.services}>
    <p>What are we <span className = {styles.span}>good</span> at??</p>
    <div className = {styles.container}>
      <Image className = {styles.image} src = {service_img}/>
      <div className = {styles.service_right}>
        <h1>App Development</h1>
      <p>App Development involves creating software applications for mobile devices
        or desktops. It includes stages like planning, design, coding, testing, and deployement. Developers
        use various programming languages and frameworks such as Java, Swift and Flutter. Ensuring a user-friendly interface and robust
        functionality is crucial. Continuous maintenance and updates are essential for security and performance.
      </p>
      <button className = {styles.button}>Learn More</button>
      </div>
    </div>
  </div>
  );
};

export default Services;
