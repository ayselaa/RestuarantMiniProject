import React from 'react'
import styles from '../../assets/css/Cta/CtaSection.module.css'
import CtoForm from './CtoForm'

const CtaSection = () => {
  return (
   <section className={styles['section-cta']} id={styles.cta}>
     <div className={styles.container}>
     <div className={styles.cta}>
       <div className={styles['cta-text-box']}>
        <h2 className={styles['heading-secondary']}>Get your first meal for free!</h2>
        <p className={styles['cta-text']}>Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
         <CtoForm/>
       </div>
       <div className={styles['cta-img-box']} role="img">img</div>
       </div>
     </div>
   </section>
  )
}

export default CtaSection
