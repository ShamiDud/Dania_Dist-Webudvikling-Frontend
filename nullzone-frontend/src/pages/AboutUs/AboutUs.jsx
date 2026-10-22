import styles from './AboutUs.module.css';
import lasseImage from '../../assets/callingCardLasse.jpg'
import phillipImage from '../../assets/callingCardPhillip.jpg'
import silasImage from '../../assets/callingCardSilas.png'
import christianImage from '../../assets/callingCardChristian.jpg'
import stefanieImage from '../../assets/callingCardStefanie.jpg'

const AboutUs = () => {
  return (
    <section id='aboutUs' className='aboutus-section'>
        <div className={styles.aboutUsContent}>
          <h1>Meet the Team at Nullzone</h1>
          <p>Discover the people behind Proxima Survival</p>
          <div className={styles.aboutUsImages}>
            <div className={styles.aboutUsImage}>
              <img className={styles.ccImage} src={phillipImage} alt="Phillip from Nullzone"/>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Phillip Nord Nielsen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & CTO</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <img className={styles.ccImage} src={lasseImage} alt="Lasse from Nullzone"/>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Lasse Handberg Gohlke</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder, CEO & Lead Game Designer</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <img className={styles.ccImage} src={christianImage} alt="Christian from Nullzone"/>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Christian Olesen</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & COO</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <img className={styles.ccImage} src={stefanieImage} alt="Stefanie from Nullzone"/>
              <div className={styles.aboutUsImageTextLeft}>
                <p>Stefanie Grøndal</p>
              </div>
              <div className={styles.aboutUsImageTextRight}>
                <p>Founder & Chief Community Officer</p>
              </div>
            </div>
            <div className={styles.aboutUsImage}>
              <img className={styles.ccImage} src={silasImage} alt="Phillip from Nullzone"/>
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