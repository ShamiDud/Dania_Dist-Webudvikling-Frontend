import SecHead from '../../components/SecHead';
import TextNImg from '../../components/TextNImg';
import style from './Roadmap.module.css';

const Roadmap = () => {
  return (
    <section id="Roadmap" className="roadmap-section">
      <div className="roadmap-content">
        <div className={style.SectionHead}>
          <SecHead TITLE="Roadmap" TAGLINE="From the beginning, to the hopeful future of Proxima Surival"/>
        </div>
        <div className={style.RMSBS}>
          <TextNImg/>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;