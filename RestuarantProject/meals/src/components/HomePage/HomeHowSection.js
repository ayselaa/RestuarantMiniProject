import React from "react";
import styles from "../../assets/css/How/HowSection.module.css";
import HowSectionImage1 from "../../assets/img/app/appcsrren-1.png";
import HowSectionImage2 from "../../assets/img/app/appscreen-2.png";
import HowSectionImage3 from "../../assets/img/app/appcreen-3.png";

const HomeHowSection = () => {
  return (
    <section id="how" className={styles["section-how"]}>
      <div className={styles.container}>
    <span className={styles.subheading}>How it works?</span>
    <h2 className={styles["heading-secondary"]}> Omnifood AI chooses from 5,000+ recipes</h2>
  </div>
      <div
        className={`${styles.container} ${styles.grid} ${styles.grid2Column}`}
      >
        <div className={styles["step-text-box"]}>
          <p className={styles["step-number"]}>01</p>
          <h3 className={styles["heading-tertiary"]}>
            Tell us what you like (and what not)
          </h3>
          <p className={styles["step-description"]}>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className={styles["step-img-box"]}>
          <img
            src={HowSectionImage1}
            className={styles["step-img"]}
            alt="iPhone app
            preferences selection screen"
          />
        </div>

        <div className={styles["step-img-box"]}>
          <img
            src={HowSectionImage2}
            className={styles["step-img"]}
            alt="iPhone app
            meal approving plan screen"
          />
        </div>
        <div className={styles["step-text-box"]}>
          <p className={styles["step-number"]}>02</p>
          <h3 className={styles["heading-tertiary"]}>
            Approve your weekly meal plan
          </h3>
          <p className={styles["step-description"]}>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        <div className={styles["step-text-box"]}>
          <p className={styles["step-number"]}>03</p>
          <h3 className={styles["heading-tertiary"]}>
            Receive meals at convenient time
          </h3>
          <p className={styles["step-description"]}>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className={styles["step-img-box"]}>
          <img
            src={HowSectionImage3}
            className={styles["step-img"]}
            alt="iPhone app
            preferences selection screen"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHowSection;
