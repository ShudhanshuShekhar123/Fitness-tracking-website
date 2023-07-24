import React from "react";
import styles from "../Styles/gym.module.css";
import { Link } from "react-router-dom";
const Gym = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gymContainer}>
        <Link to="/bodypart/Chest">
          <div className={`${styles.card1} ${styles.card}`}>
            <center>Chest</center>
          </div>
        </Link>
        <Link to="/bodypart/Legs">
          <div className={`${styles.card2} ${styles.card}`}>
            <center>Legs</center>
          </div>
        </Link>
        <Link to="/bodypart/Arms">
          <div className={`${styles.card3} ${styles.card}`}>
            <center>Arms</center>
          </div>
        </Link>
        <Link to="/bodypart/Biceps">
          <div className={`${styles.card4} ${styles.card}`}>
            <center>Biceps</center>
          </div>
        </Link>
        <Link to="/bodypart/Back">
          <div className={`${styles.card5} ${styles.card}`}>
            <center>Back</center>
          </div>
        </Link>
        <Link to="/bodypart/Triceps">
          <div className={`${styles.card6} ${styles.card}`}>
            <center>Triceps</center>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Gym;
