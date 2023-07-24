import React from 'react'
// import exerciseImage from '../images/gym_image.jpg'
import styles from "../Styles/exercise_categories.module.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Exercises_CategoryPage = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.exercises_category_container}>
    <Link to="/gym"><div className={styles.card1}>
      <center className={styles.textInsideCard}>GYM</center>
    </div></Link>
    <div className={styles.card2}>
      <center className={styles.textInsideCard}>YOGA</center>
    </div>
    <div className={styles.card3}>
      <center className={styles.textInsideCard}>CALISTHENICS</center>
    </div>
    <div className={styles.card4}>
      <center className={styles.textInsideCard}>CARDIO</center>
    </div>
  </div></div>
  )
}

export default Exercises_CategoryPage
