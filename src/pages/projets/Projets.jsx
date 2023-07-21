import Kasa from '../../asset/images/kasa.jpg';
import Nina from '../../asset/images/nina.jpg';
import Booki from '../../asset/images/booki.jpg';
import './Projets.scss';
function Projets() {
  return (
    <div className="Projets">
      <div className="Projets_contener">
        <h2>Portfolio</h2>
          <ul className='Projets_grid'>
              <h3>Booki</h3>
              <a href="https://booki-p2.netlify.Projets/">
                <img className="imgBooki" src={Booki} alt="Site booki" />
              </a>
            
            <h3>Nina Carducci</h3>
              <a href="https://photographe-nina-carducci.netlify.Projets/">
                <img className="imgNina" src={Nina} alt="Site nina" />
              </a>
            
            <h3>Kasa</h3>
              <a href="https://projet-kaza.netlify.Projets/">
               <img className="imgKasa" src={Kasa} alt="Site kasa" />
              </a>
          </ul>
      </div>
    </div>
  );
}

export default Projets;