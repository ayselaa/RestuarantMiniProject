import React from "react";
import FooterAddress from "./Element/FooterAddress";
import FooterCopyRight from "./Element/FooterCopyRight";
import FooterSocialMedia from "./Element/FooterSocialMedia";
import styles from '../../assets/css/Footer/Footer.module.css'
import { Link } from "react-router-dom";
import Logo from "../../assets/img/omnifood-logo.png";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--footer']}`}>
        <div className={styles['logo-col']}>
          <Link to={'/'} className={styles['footer-logo']}>
            <img className={styles.logo} alt="Omnifood logo" src={Logo} />
          </Link>

          <FooterSocialMedia />

          <FooterCopyRight />
        </div>
        <div className={styles['address-col']}>
        <FooterAddress />

        </div>

        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Account</p>
          <ul className={styles['footer-nav']}>
            <li>
              <Link to={'/'} className={styles['footer-link']}>Create account</Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>Sign in</Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>iOS app</Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>Android app</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Company</p>
          <ul className={styles['footer-nav']}>
            <li>
              <Link to={'/'} className={styles['footer-link']} >
                About Omnifood
              </Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                For Business
              </Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                Cooking partners
              </Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <nav className={styles['nav-col']}>
          <p className={styles['footer-heading']}>Resources</p>
          <ul className={styles['footer-nav']}>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                Recipe directory{" "}
              </Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                Help center
              </Link>
            </li>
            <li>
              <Link to={'/'} className={styles['footer-link']}>
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
