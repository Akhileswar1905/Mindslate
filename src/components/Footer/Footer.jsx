import styles from "./Footer.module.css";
import Image from 'next/image';
import logo from  '../../../public/assets/logo.png';
import facebook from '../../../public/assets/facebook.png';
import youtube from '../../../public/assets/youtube.jpeg';
import twitter from '../../../public/assets/twitter.png';
import linkedIn from '../../../public/assets/linkedIn.jpeg';
const Footer = () => {
  return (
    <div className = {styles.footer}>
        <div className = {styles.footer_left}>
            <div className = {styles.logo}>
                <Image src = {logo} alt = 'logo'/>
            </div>
            <div className = {styles.social_media}>
                <div className = {styles.icon}>
                    <Image src = {facebook}/>
                </div>
                <div className = {styles.icon}>
                    <Image src = {youtube}/>
                </div>
                <div className = {styles.icon}>
                    <Image src = {twitter}/>
                </div>
                <div className = {styles.icon}>
                    <Image src = {linkedIn}/>
                </div>
            </div>
        </div>
        <div className = {styles.footer_right}>
            <div className = {styles.company}>
              <h1>Company</h1>
              <h3>Our Services</h3>
              <h3>Testimonials</h3>
              <h3>About Us</h3>
              <h3>Contact</h3>
            </div>
            <div className = {styles.official_info}>
              <h1>Official Info</h1>
              <h3>Hyderabad, Telangana, 500072, IN</h3>
              <h3>info@Mindslate.com</h3>
              <h3>+91</h3>
            </div>
        </div>
    </div>
);
};

export default Footer;
