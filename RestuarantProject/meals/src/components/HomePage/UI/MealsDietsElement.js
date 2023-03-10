import React from 'react'
import styles from '../../../assets/css/Meals/MealsDietsElement.module.css'

const MealsDietsElement = () => {
  return (
  
         <div className={styles.diets}>
            <h3 className={styles['heading-tertiary']}>Works with any diet:</h3>
            <ul className={styles.list}>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Vegetarian</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Vegan</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Pescatarian</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Gluten-free</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Lactose-free</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Keto</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Paleo</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Low FODMAP</span>
              </li>
              <li className={styles['list-item']}>
                <ion-icon  name="checkmark-outline"></ion-icon>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
  )
}

export default MealsDietsElement
