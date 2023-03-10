import React from 'react'
import styles from '../../../assets/css/Footer/FooterSocialMedia.module.css'
import { Link } from "react-router-dom";

const FooterSocialMedia = () => {
  return (
    <ul className={styles['social-links']}>
    <li>
      <Link className={styles['footer-link']} to={'/'}>
        <ion-icon className={styles['social-icon']} name="logo-instagram"></ion-icon>
      </Link>
    </li>
    <li>
      <Link className={styles['footer-link']} to={'/'}>
        <ion-icon className={styles['social-icon']} name="logo-facebook"></ion-icon>
      </Link>
    </li>
    <li>
      <Link className={styles['footer-link']} to={'/'}>
        <ion-icon className={styles['social-icon']} name="logo-twitter"></ion-icon>
      </Link>
    </li>
  </ul>
  )
}

export default FooterSocialMedia
