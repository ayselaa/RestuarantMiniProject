import React from 'react'
import styles from '../../assets/css/DownFeatureSection.module.css'

const DownFeatureSection = () => {
  return (
    <div  className={`${styles.container} ${styles.grid} ${styles.grid4Column}`}>
    <div className={styles.feature}>
      <ion-icon  name="infinite-outline"></ion-icon>
      <p className={styles['feature-title']}>Never cook again!</p>
      <p className={styles['feature-text']}>
        Our subscriptions cover 365 days per year, even including major
        holidays.
      </p>
    </div>
    <div className={styles.feature}>
      <ion-icon name="nutrition-outline"></ion-icon>
      <p className={styles['feature-title']}>Local and organic</p>
      <p className={styles['feature-text']}>
        Our cooks only use local, fresh, and organic products to prepare
        your meals.
      </p>
    </div>
    <div className={styles.feature}>
      <ion-icon  name="leaf-outline"></ion-icon>
      <p className={styles['feature-title']}>No waste</p>
      <p className={styles['feature-text']}>
        All our partners only use reusable containers to package all your
        meals.
      </p>
    </div>
    <div className={styles.feature}>
      <ion-icon  name="pause-outline"></ion-icon>
      <p className={styles['feature-title']}>Pause anytime</p>
      <p className={styles['feature-text']}>
        Going on vacation? Just pause your subscription, and we refund
        unused days.
      </p>
    </div>
  </div>
  )
}

export default DownFeatureSection
