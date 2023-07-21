// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#">vman-and-white-cult-text</a>
          <a href="#">cult.fit for business</a>
          <a href="#">cult.fit franchise</a>
          <a href="#">corporate partnerships</a>
          <a href="#">cult pass network</a>
          <a href="#">t&c for business</a>
          <a href="#">partner.fit</a>
          <a href="#">blogs</a>
          <a href="#">security</a>
          <a href="#">careers</a>
          <a href="#">contact us</a>
          <a href="#">privacy policy</a>
          <a href="#">cult bmi calculator</a>
          <a href="#">terms & conditions</a>
          <a href="#">app-store</a>
          <a href="#">play-store</a>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" className={styles.socialIcon}><FaTwitter /></a>
          <a href="#" className={styles.socialIcon}><FaFacebook /></a>
          <a href="#" className={styles.socialIcon}><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
