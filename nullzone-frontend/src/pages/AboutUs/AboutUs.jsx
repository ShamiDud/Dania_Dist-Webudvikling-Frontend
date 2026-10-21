import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id='aboutus' className='aboutus-section'>
        <div className={styles.aboutUsContent}>
          <h1>Meet the Team at Nullzone</h1>
          <p>Discover the people behind Proxima Survival</p>
          <div className={styles.aboutUsImages}>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Phillip Nord Nielsen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & CFO</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Phillip Nord Nielsen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & CFO</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutUs;