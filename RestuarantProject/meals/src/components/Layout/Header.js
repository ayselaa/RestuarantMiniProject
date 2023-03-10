import React from "react";
import styles from "../../assets/css/Header/Header.module.css";
import { Link } from "react-scroll";
import Logo from "../../assets/img/omnifood-logo.png";
import { useState } from "react";
import { useRef } from "react";

const Header = () => {
  const [showClose, setShowClose] = useState(false);
  const navRef = useRef();

  const toogleNavbar = () => {
    navRef.current.classList.toggle(styles["responsiv-nav"]);
    setShowClose(!showClose);
  };

  return (
    <header className={`${styles.header} ${styles.cd }`}>
      <Link Link to={"/"}>
        <img className={styles.logo} alt="Omnifood logo" src={Logo} />
      </Link>
      <nav className={styles["main-nav"]} ref={navRef}>
        <ul>
          <li>
            <Link className={styles["main-nav-link"]} activeClass="active" to="how" spy={true} smooth={true} offset={50} duration={500}>
              How it works
              
            </Link>
          </li>
          <li>
            <Link className={styles["main-nav-link"]} activeClass="active" to="meals" spy={true} smooth={true} offset={50} duration={500}>
              Meals
            </Link>
          </li>
          <li>
            <Link className={styles["main-nav-link"]} activeClass="active" to="testimonials" spy={true} smooth={true} offset={50} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link className={styles["main-nav-link"]} activeClass="active" to="pricing" spy={true} smooth={true} offset={50} duration={500}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to={"/"} className={styles["nav-cta"]}>
              Try for free
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles["main-nav-icons"]}>
        {!showClose && (
          <div className={styles.menubtn} onClick={toogleNavbar}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        )}
        {showClose && (
          <div className={styles.menubtn} onClick={toogleNavbar}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;
