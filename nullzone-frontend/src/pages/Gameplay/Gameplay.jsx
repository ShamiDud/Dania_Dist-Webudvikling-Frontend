
import styles from './Gameplay.module.css';
import GameplayRow from '../../components/GameplayRow';

import gameplayImage from '../../assets/gameplay-screenshot.png';
import enemyImage from '../../assets/enemy-concepts.png';
import abilityImage from '../../assets/ability-concepts.png';
import portalImage from '../../assets/portal.png';

const Gameplay = () => {
  return (
    <section id='gameplay' className={styles.gameplaySection}>
      <h1 className={styles.heading}>Core Gameplay</h1>

      <div className={styles.gameplayContent}>
        <GameplayRow
          image={gameplayImage}
          alt="Gameplay screenshot"
          text={`Lorem Ipsum is simply dummy
                text of the printing and
                typesetting industry. Lorem
                Ipsum has been the
                industry's standard dummy
                text ever since 1966, when
                designers at Letraset and
                James Mosley, the librarian
                at St Bride Printing`}
        />

        <GameplayRow
          image={enemyImage}
          alt="Enemy concept art"
          imageFirst={true}
          text={`Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem
Ipsum has been the
industry's standard dummy
text ever since 1966, when
designers at Letraset and
James Mosley, the librarian
at St Bride Printing`}
        />

        <GameplayRow
          image={abilityImage}
          alt="Ability concept art"
          text={`Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem
Ipsum has been the
industry's standard dummy
text ever since 1966, when
designers at Letraset and
James Mosley, the librarian
at St Bride Printing`}
        />

        <GameplayRow
          image={portalImage}
          alt="Portal concept art"
          imageFirst={true}
          text={`Lorem Ipsum is simply dummy
text of the printing and
typesetting industry. Lorem
Ipsum has been the
industry's standard dummy
text ever since 1966, when
designers at Letraset and
James Mosley, the librarian
at St Bride Printing`}
        />
      </div>
    </section>
  );
};

export default Gameplay;