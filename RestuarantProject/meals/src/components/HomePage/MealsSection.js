import React from "react";
import styles from "../../assets/css/Meals/Meals.module.css";
import MealImgFirst from "../../assets/img/meals/meal-1.jpg";
import MealImgSecond from "../../assets/img/meals/meal-2.jpg";
import MealsDietsElement from "./UI/MealsDietsElement";

const MealsSection = () => {
  return (
    <section className={styles["section-meals"]} id="meals">
       <div className={styles.container}>
        <span className={styles.subheading}>Meals</span>
        <h2 className={styles["heading-secondary"]}> Omnifood AI chooses from 5,000+ recipes</h2>
      </div>

      <div className={`${styles.container} ${styles.grid} ${styles["grid--3-cols"]}`}>
         {/* MEAL BOX 1  */}
        <div className={styles.meal}>
          <img alt="img" className={styles["meal-img"]} src={MealImgFirst} />
          <div className={styles['meal-content']}>

          <div className={styles['meal-tags']}>
            <span className={`${styles.tag} ${styles['tag--vegetarian']}`}>Vegetarian</span>
          </div>

          <p className={styles["meal-title"]}>Japanese Gyozas</p>
          <ul className={styles['meal-attributes']}>

            <li className={styles['meal-attribute']}>
              <ion-icon name="flame-outline"></ion-icon>
              <span><strong>650</strong> calories </span>
            </li>

            <li className={styles['meal-attribute']}>
              <ion-icon name="restaurant-outline"></ion-icon>
              <span> NutriScore &reg; <strong>74</strong></span>
            </li>

            <li className={styles['meal-attribute']}>
              <ion-icon name="star-outline"></ion-icon>
             <span><strong>4.9</strong> rating (537)</span>
            </li>

          </ul>
          </div>
        </div>
           {/* MEAL BOX 2  */}
        <div className={styles.meal}>
          <img alt="img" className={styles["meal-img"]} src={MealImgSecond} />
          <div className={styles['meal-content']}>

          <div className={styles['meal-tags']}>
            <span className={`${styles.tag} ${styles['tag--vegan']}`}>Vegan</span>
            <span className={`${styles.tag} ${styles['tag--paleo']}`}>Paleo</span>
          </div>

          <p className={styles["meal-title"]}>Avacado Salad</p>
          <ul className={styles['meal-attributes']}>

            <li className={styles['meal-attribute']}>
              <ion-icon name="flame-outline"></ion-icon>
              <span><strong>400</strong> calories </span>
            </li>

            <li className={styles['meal-attribute']}>
              <ion-icon name="restaurant-outline"></ion-icon>
              <span> NutriScore &reg; <strong>92</strong></span>
            </li>

            <li className={styles['meal-attribute']}>
              <ion-icon name="star-outline"></ion-icon>
             <span><strong>4.8</strong> rating (441)</span>
            </li>

          </ul>
          </div>
        </div>
         {/* MEAL BOX 3 */}
      <MealsDietsElement/>
      </div>


    </section>
  );
};

export default MealsSection;
