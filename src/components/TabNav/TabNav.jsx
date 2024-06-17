import Image from "next/image";
import Link from "next/link";
import styles from "./TabNav.module.css";

const TabNav = () => {
  return (
    <div className={styles.tabNav}>
      <Link href="/">
        <div className="group">
          <Image
            src={"/assests/icons/Home.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>Home</p>
        </div>
      </Link>
      <Link href="/about">
        <div className="group">
          <Image
            src={"/assests/icons/AboutUs.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>About Us</p>
        </div>
      </Link>
      <Link href="/our-services">
        <div className="group">
          <Image
            src={"/assests/icons/Services.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>Services</p>
        </div>
      </Link>
      <Link href="/our-work">
        <div className="group">
          <Image
            src={"/assests/icons/Apps.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>Apps</p>
        </div>
      </Link>
      <Link href="/contact-us">
        <div className="group">
          <Image
            src={"/assests/icons/ContactUs.png"}
            width={30}
            height={30}
            alt="icon"
          ></Image>
          <p>Contact Us</p>
        </div>
      </Link>
    </div>
  );
};

export default TabNav;
