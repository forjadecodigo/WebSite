import '../styles/Banner.css'
import workshop from '../assets/workshop.png'
import subject from '../assets/subject.png'
import workbench from '../assets/workbench.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-layer background">
        <img src={workshop} alt="Taller" />
      </div>
      <div className="banner-layer subject">
        <img src={subject} alt="Sujeto" />
      </div>
      <div className="banner-layer workbench">
        <img src={workbench} alt="Banco de trabajo" />
      </div>
    </div>
  )
}

export default Banner 