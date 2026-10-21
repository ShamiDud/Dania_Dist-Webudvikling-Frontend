import styles from './HeroSection.module.css';
import MediaPlayerHS from '../../components/MediaPlayerHS';

const HeroSection = () => {
  return (
    <section id='heroSection' className={styles['hero-section']}>
      <div className={styles['hero-content']}>
        <h1>Proxima Survival</h1>
      </div>
      <MediaPlayerHS />
      <a 
      href="https://nullzone-studios.itch.io/proxima-survival-3d"
      target="_blank"
      rel="noopener noreferrer"
      className={styles['cta-button']}
      >
        PLAY NOW
      </a>
    </section>
  );
}

export default HeroSection;