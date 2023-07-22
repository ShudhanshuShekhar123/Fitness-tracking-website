import React from 'react'
import styles from "../Styles/gym.module.css"
const Gym = () => {
  return (
    <div className={styles.mainContainer}>
    <div className={styles.gymContainer}>
      <div className={`${styles.card1} ${styles.card}`} >
        <center>Chest</center>
      </div>
      <div className={`${styles.card2} ${styles.card}`} >
        <center>Legs</center>
      </div>
      <div className={`${styles.card3} ${styles.card}`} >
        <center>Arms</center>
      </div>
      <div className={`${styles.card4} ${styles.card}`} >
        <center>Biceps</center>
      </div>
      <div className={`${styles.card5} ${styles.card}`} >
        <center>Back</center>
      </div>
      <div className={`${styles.card6} ${styles.card}`} >
        <center>Triceps</center>
      </div>
    </div></div>
  )
}

export default Gym
