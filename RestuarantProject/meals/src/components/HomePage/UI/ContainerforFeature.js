import React from 'react'
import styles from '../../../assets/css/Elements/ContainerforFeature.module.css'

const ContainerforFeature = () => {
  return (
    <div className={`${styles.container} ${styles.grid}`}>
    <aside className={styles['plan-details']}>
      Prices include all applicable taxes. You can cancel at any time.
      Both plans include the following:
    </aside>
  </div>
  )
}

export default ContainerforFeature
