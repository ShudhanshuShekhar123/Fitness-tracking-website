import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);

  const drawerHandle = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="https://private-user-images.githubusercontent.com/112471219/255143771-5f048cd1-c255-45dd-87ba-ab75dad2e501.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2ODk5NDc5OTAsIm5iZiI6MTY4OTk0NzY5MCwicGF0aCI6Ii8xMTI0NzEyMTkvMjU1MTQzNzcxLTVmMDQ4Y2QxLWMyNTUtNDVkZC04N2JhLWFiNzVkYWQyZTUwMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNzIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDcyMVQxMzU0NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZDVhODNjMmZiNWI5ODBhZjhlYzRjMTk3MGEwOWVlZTBhMmYwM2FmZDlmMTk1NjNjYTJkMzliZTU1MjUwM2VjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.EG_HtucUxEawJwqiVItSCXxS_u50wnHpWmkHfv_u5go" height={"40px"}  alt="" />
        <h3>Fit hub</h3>
      </div>
      <div className={`${styles.linksContainer} ${drawer ? styles.active : ''}`}>
        <Link className={styles.link} >
          Home
        </Link>
        <Link className={styles.link} >
          Exercise
        </Link>
      </div>
      <div className={styles.icons}>
        <BiUserCircle size={"40px"} />
      </div>
      <div className={styles.hamburger} onClick={drawerHandle}>
        <GiHamburgerMenu />
      </div>
      <div className={`${styles.drawer} ${drawer ? styles.open : ''}`}>
        <Link >Home</Link>
        <Link>Exercise</Link>
      </div>
    </div>
  );
};

export default Navbar;
