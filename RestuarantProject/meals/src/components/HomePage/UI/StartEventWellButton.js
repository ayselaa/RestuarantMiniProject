import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../assets/css/Elements/StartEventWellButton.module.css'


const StartEventWellButton = () => {
  return (
    <Link to={'/'} className={`${styles.btn1} ${styles.btn}`}>Start eating well</Link> 
  )
}

export default StartEventWellButton
