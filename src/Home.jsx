import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div style={{width:"98.7vw"}} className={styles.home}>
      <div style={{ margin:"auto" }}>
        <video
          style={{ width: "100%" }}
          loop
          playsInline
          autoPlay
          muted   // Add the muted attribute to enable autoplay on mobile devices
          poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
        >
          <source
            src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.workout}>
        <h1 style={{color:"white"}}>WORKOUT</h1>
        <div className={styles.workoutgrid}>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_287,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.spotlight}>
        <h1 style={{color:'white'}}>SPOTLIGHT</h1>
        <div className={styles.spotlightgrid}>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_640,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png" alt="" />
          </div>
          <div>
            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_640,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
