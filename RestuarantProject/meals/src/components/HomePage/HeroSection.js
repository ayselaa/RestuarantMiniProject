import React from 'react'
import styles from '../../assets/css/Hero/HeroSection.module.css'
import heroImg from '../../assets/img/hero.png'
import { Link } from 'react-router-dom'
import Customer1 from '../../assets/img/Customer/customer-1.jpg'
import Customer2 from '../../assets/img/Customer/customer-2.jpg'
import Customer3 from '../../assets/img/Customer/customer-3.jpg'
import Customer4 from '../../assets/img/Customer/customer-4.jpg'
import Customer5 from '../../assets/img/Customer/customer-5.jpg'
import Customer6 from '../../assets/img/Customer/customer-6.jpg'
import StartEventWellButton from './UI/StartEventWellButton'

const HomeFirstSection = () => {
  return (
  
         <section className={styles['section-hero']}>
         <div className={styles.hero}>
         <div className={styles.heroTextBox}>
         <h1 className={styles['heading-primary']}>A healthy meal delivered to your door, every single day</h1>
         <p  className={styles['hero-description']}>
         The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
         </p>
         <StartEventWellButton/>
          <Link to={'/'} className={`${styles.btn2} ${styles.btn}`}>Learn more <i class="fa-sharp fa-solid fa-arrow-down"></i></Link>
            <div className={styles.mealCustomers}>
                <div className={styles.customerImages}>
                <img src={Customer1} alt='img'/>
                <img src={Customer2} alt='img'/>
                <img src={Customer3} alt='img'/>
                <img src={Customer4} alt='img'/>
                <img src={Customer5} alt='img'/>
                <img src={Customer6} alt='img'/>
                </div>
                <p className={styles.customerText}><span className={styles.customerText2}>250,000+ </span>delivered last year!</p>
            </div>
            </div>
          <div className={styles['hero-img-box']}>
              <img src={heroImg} alt="HeroImage" className={styles['hero-img']}/>
          </div>
         </div>
        </section>
  
  )
}

export default HomeFirstSection
