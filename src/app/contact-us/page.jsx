import styles from "./contactus.module.css";
import Image from 'next/image';
import image from '../../../public/assets/service_image.png'
const ContactUsPage = () => {
  return (
  <div className={styles.contact_us}>
    <div className = {styles.image}>
      <Image src={image} alt="Contact Us" />
    </div>
    <div className = {styles.container}>
      <h1>Contact Us</h1>
      <form>
        <input type = 'text' name = 'name' placeholder = 'Name'/>
        <input type = 'email' name = 'email' placeholder = 'Email'/>
        <input type = 'tel' name = 'phone' placeholder = 'Phone'/>
        <input type = 'text' name = 'company' placeholder = 'Company name'/>
        <textarea name = 'message' placeholder = 'Message......'/>
        <button type = 'submit'>Let's Connect</button>
      </form>
    </div>
  </div>
  );
};

export default ContactUsPage;
