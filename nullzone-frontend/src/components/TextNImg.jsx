import style from '../pages/Roadmap/Roadmap.module.css'
import png from '../assets/Roadmap.png'

const TextNImg = () => {
  return (
    <>
      <div classname={style.paragraphGap}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas efficitur mollis justo, dictum vestibulum ipsum accumsan id.
          Suspendisse vel justo elementum, ornare felis nec, dictum tellus.
          Nam purus neque, mollis ut sem sed, vestibulum vestibulum neque.
          Mauris et massa eu ligula imperdiet lobortis commodo vitae ligula.
          Etiam massa dui, lobortis non felis sit amet, dictum consectetur odio.
          Integer ut turpis id turpis tempor accumsan in vel nisi.
          Donec suscipit leo mauris, ut ultricies sem laoreet at.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas efficitur mollis justo, dictum vestibulum ipsum accumsan id.
          Suspendisse vel justo elementum, ornare felis nec, dictum tellus.
          Nam purus neque, mollis ut sem sed, vestibulum vestibulum neque.
          Mauris et massa eu ligula imperdiet lobortis commodo vitae ligula.
          Etiam massa dui, lobortis non felis sit amet, dictum consectetur odio.
          Integer ut turpis id turpis tempor accumsan in vel nisi.
          Donec suscipit leo mauris, ut ultricies sem laoreet at.</p>
      </div>
      
      <img className={style.RMPng} src={png} alt="Nullzones roadmap pictured."/>
    </>
  )
}
export default TextNImg