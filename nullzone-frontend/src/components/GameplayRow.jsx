import styles from './GameplayRow.module.css';

const GameplayRow = ({ image, alt, text, imageFirst = false }) => {
  return (
    <div
      className={`${styles.row} ${
        imageFirst ? styles.imageFirst : ''
      }`}
    >
      <img
        className={styles.image}
        src={image}
        alt={alt}
      />

      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default GameplayRow;