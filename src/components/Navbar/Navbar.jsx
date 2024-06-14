import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../../public/assests/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href={"/our-services"}>Our Services</Link>
        <Link href="/our-work">Our Works</Link>
        {/* <Link href="awards">Awards</Link> */}
        <Link href="testimonials">Testimonials</Link>
      </div>
      <div className={styles.contactus}>
        <Link href={"/contact-us"}>
          <button className={styles.contactusButton}>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
