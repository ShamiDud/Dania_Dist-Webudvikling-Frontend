import style from '../pages/Roadmap/Roadmap.module.css'

const SecHead = ({TITLE, TAGLINE}) => {
    return (
        <>
            <header className={style.SectionHead}>        
                <h1>{TITLE}</h1>
                <p>{TAGLINE}</p>
            </header>
        </>
    );
};
export default SecHead;