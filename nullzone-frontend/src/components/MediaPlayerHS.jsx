import { useState } from 'react';
import styles from './MediaPlayerHS.module.css';

/*Billeder*/
import capsuleImg from '../assets/Game screenshot capsule.png';
import portalImg from '../assets/Game screenshot portal.png';
import scrapImg from '../assets/Game screenshot scrap.png';
import swordImg from '../assets/Game screenshot sword.png';

const MediaPlayerHS = () => {
    const [activeMedia, setActiveMedia] = useState('video');

    return (
        <div className={styles['media-player-container']}>
            {/* Venstre side: 75% bredde */}
            <div className={styles['media-section']}>
                {/*Videovisning*/}
                <div className={styles['media-display']}>
                    {activeMedia === 'video' ? (
                        <iframe 
                        src="https://www.youtube.com/embed/0J2QdDbelmY" 
                        title="Gameplay"
                        className={styles['media-iframe']}
                        allowFullScreen
                    />
                    ) : (
                        <img src={activeMedia} alt="Game screenshot" className={styles['media-image']} />
                    )}
                </div>

                {/* Thumbnails */}
                <div className={styles['thumbnail-bar']}>
                    <button onClick={() => setActiveMedia('video')} className={styles['thumbnail']}>
                        Video
                    </button>
                    <button onClick={() => setActiveMedia(capsuleImg)} className={styles['thumbnail']}>
                        <img src={capsuleImg} alt="Capsule" className={styles['thumbnail-img']} />
                    </button>
                    <button onClick={() => setActiveMedia(portalImg)} className={styles['thumbnail']}>
                        <img src={portalImg} alt="Portal" className={styles['thumbnail-img']} />
                    </button>
                    <button onClick={() => setActiveMedia(scrapImg)} className={styles['thumbnail']}>
                        <img src={scrapImg} alt="Scrap" className={styles['thumbnail-img']} />
                    </button>
                    <button onClick={() => setActiveMedia(swordImg)} className={styles['thumbnail']}>
                        <img src={swordImg} alt="Sword" className={styles['thumbnail-img']} />
                    </button>
                </div>
            </div>

            {/* Højre side: 25% bredde */}
            <div className={styles['info-box']}>
                <h3>Proxima Survival er...</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                <p>Yderligere information...</p>
            </div>
        </div>

    );
}

export default MediaPlayerHS;