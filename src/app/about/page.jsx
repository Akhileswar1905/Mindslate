import Image from "next/image";
import styles from "./about.module.css";
import image from "./images/team.jpeg";
const AboutPage = () => {
  return(
      <div className = {styles.main}>
        <div className = {styles.glassyBox}>
          <p>The forest was alive with the sound of chirping birds and rustling leaves, creating a symphony of nature. Sunlight filtered through the dense canopy, casting dappled shadows on the forest floor. A gentle breeze carried the earthy scent of moss and pine, invigorating the senses. In the distance, a brook babbled merrily, its crystal-clear waters glistening in the afternoon light. This serene setting was a stark contrast to the bustling city life left behind, 
            offering a peaceful retreat for those seeking solace and a connection with nature. The tranquility of the forest provided a perfect backdrop for reflection and rejuvenation, far removed from the chaos of modern existence.</p>
        </div>
        <div className = {styles.image}>
          <Image src = {image} alt = "team"/>
        </div>
      </div>
  );
};

export default AboutPage;
