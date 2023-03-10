import React from "react";
import styles from "../../assets/css/HomeFeatureSection.module.css";
import logo1 from "../../assets/img/brands/logo-1.png";
import logo2 from "../../assets/img/brands/logo-2.png";
import logo3 from "../../assets/img/brands/logo-3.png";
import logo4 from "../../assets/img/brands/logo-4.png";
import logo5 from "../../assets/img/brands/logo-5.png";

const FeatureSection = () => {
  return (
    <section className={styles["section-featured"]}>
      <div className={styles.container}>
        <h2 className={styles['heading-featured-in']}>As featured in</h2>
        <div className={styles.logos}>
          <img src={logo1} alt="img" />
          <img src={logo2} alt="img" />
          <img src={logo3} alt="img" />
          <img src={logo4} alt="img" />
          <img src={logo5} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
