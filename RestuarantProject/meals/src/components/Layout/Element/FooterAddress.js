import React from 'react'
import styles from '../../../assets/css/Footer/FooterAddress.module.css'
import { Link } from "react-router-dom";

const FooterAddress = () => {
  return (
    <div>
    <p className={styles['footer-heading']}>Contact us</p>
    <address className={styles.contacts}>
      <p className={styles.address}>
        623 Harrison St., 2nd Floor, San Francisco, CA 94107
      </p>
      <p>
        <Link  className={styles['footer-link']} href="tel:415-201-6370" to={'/'}>
          415-201-6370
        </Link>
        <br />
        <Link className={styles['footer-link']} href="mailto:hello@omnifood.com" to={'/'}>
          hello@omnifood.com
        </Link>
      </p>
    </address>
  </div>
  )
}

export default FooterAddress
