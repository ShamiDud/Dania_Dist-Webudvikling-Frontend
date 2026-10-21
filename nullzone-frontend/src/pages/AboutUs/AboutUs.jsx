import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id='aboutUs' className='aboutus-section'>
        <div className={styles.aboutUsContent}>
          <h1>Meet the Team at Nullzone</h1>
          <p>Discover the people behind Proxima Survival</p>
          <div className={styles.aboutUsImages}>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Phillip Nord Nielsen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & CTO</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Lasse Handberg Gohlke</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder, CEO & Lead Game Designer</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Christian Olesen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & COO</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Stefanie Grøndal</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & Chief Community Officer</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Silas Megård Opstrup</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & Chief Creative Officer</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutUs;