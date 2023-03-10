import React from "react";
import styles from '../../../assets/css/Footer/FooterCopyRight.module.css'

const FooterCopyRight = () => {
  return (
    <p className={styles.copyright}>
      Copyright &copy; <span class="year">2023</span> by Omnifood, Inc. All
      rights reserved.
    </p>
  );
};

export default FooterCopyRight;
