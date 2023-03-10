import React from 'react'
import styles from '../../assets/css/Pricing/PricingSection.module.css'
import StartEventWellButton from './UI/StartEventWellButton'
import ContainerforFeature from './UI/ContainerforFeature'
import DownFeatureSection from './DownFeatureSection'

const PricingSection = () => {
  return (
    <section id="pricing" className={styles['section-pricing']}>
    <div className={styles.container}>
      <span className={styles.subheading}>Pricing</span>
      <h2 className={styles['heading-secondary']}>
        Eating well without breaking the bank
      </h2>
    </div>

    <div  className={`${styles.container} ${styles.grid} ${styles.grid2Column} ${styles['margin-bottom-md']}`}>
      <div className={`${styles['pricing-plan']}  ${styles['pricing-plan-starte']}`}>
      
         <header className={styles['plan-header']}>
           <p className={styles['plan-name']}>Starter</p>
           <p className={styles['plan-price']}><span>$</span>399</p>
           <p className={styles['plan-text']}>per month. That's just $13 per meal!</p>
         </header>
         
         <ul className={styles.list}>
           <li className={styles['list-item']}>
             <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
             <span>1 meal per day</span>
           </li>
           <li className={styles['list-item']}>
             <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
             <span>Order from 11am to 9pm</span>
           </li>
           <li className={styles['list-item']}>
             <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
             <span>Delivery is free</span>
           </li>
           <li className={styles['list-item']}>
             <ion-icon className={styles['list-icon']} name="close-outline"></ion-icon>
           </li>
         </ul>

         <div className={styles['plan-sing-up']}>
      <StartEventWellButton/>
         </div>
      </div>

    <div className={`${styles['pricing-plan']}  ${styles['pricing-plan--complete']}`}>

        <header className={styles['plan-header']}>
          <p className={styles['plan-name']}>Complete</p>
          <p className={styles['plan-price']}><span>$</span>649</p>
          <p className={styles['plan-text']}>per month. That's just $11 per meal!</p>
        </header>
        <ul className={styles.list}
        >
          <li className={styles['list-item']}>
            <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
            <span><strong>2 meals</strong> per day</span>
          </li>
          <li className={styles['list-item']}>
            <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
            <span>Order <strong>24/7</strong></span>
          </li>
          <li className={styles['list-item']}>
            <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
            <span>Delivery is free</span>
          </li>
          <li className={styles['list-item']}>
            <ion-icon className={styles['list-icon']} name="checkmark-outline"></ion-icon>
            <span>Get access to latest recipes</span>
          </li>
        </ul>
         <div className={styles['plan-sing-up']}>      
         <StartEventWellButton/>     
         </div>
      </div>
    </div>
      <ContainerforFeature/>
      <DownFeatureSection/>
  </section>
  )
}

export default PricingSection
