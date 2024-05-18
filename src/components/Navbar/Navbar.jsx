import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/assests/logo.png";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/applications">Apps</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/about">About Us</a>
        <a href="/teams">Team</a>
        <a href="/our-work">Our Works</a>
        <a href="/awards">Awards and Recognitions</a>
      </div>
    </div>
  );
};

export default Navbar;
