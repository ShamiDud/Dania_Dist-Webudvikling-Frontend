import style from '../pages/Roadmap/Roadmap.module.css'

const SecHead = ({TITLE, TAGLINE}) => {
    return (
        <>
            <header className={style.SectionHead}>        
                <h1>{TITLE}</h1>
                <h4>{TAGLINE}</h4>
            </header>
        </>
    );
};
export default SecHead;