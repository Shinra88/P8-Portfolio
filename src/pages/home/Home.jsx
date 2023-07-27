import CV from "../../asset/cv_colin_kevin.pdf"
import Aston from "../../asset/images/aston.webp"
import Oc from "../../asset/images/openclassrooms.webp"
import './Home.scss';
function Home() {
  return (
    <div className="Home">
      <div className="Home-contener">
        <h1>A propos de moi</h1>
        <p>
          Passionné par les nouvelles technologies <br></br>
          et fort d'une expérience de 11 ans en tant que technicien de maintenance informatique,<br></br>
          j'ai procédé à une reconversion de développeur en 2022<br></br>
          dans le cadre d'une formation continue.<br></br>
        </p>
        <h2>J'ai depuis entrepris:</h2>
        <div className="Formation">
          <ul>
            <li>BAC + 2, Développeur Web 2023
              <a href="https://openclassrooms.com/fr/paths/717-developpeur-web">
                <img className="logo_oc" src={Oc} alt="Logo OpenClassrooms" />
              </a>
            </li>
            
            <li>BAC + 4, Concepteur Développeur Nouvelles Technologies 2023 - 2025
              <a href="https://astonbysqli.com/nos-formations/concepteur-developpeur-nouvelles-technologies-cdnt/">
                <img className="logo_aston" src={Aston} alt="Logo Aston Sqli" />
              </a>
            </li>
          </ul>
        </div>
        <a className="download" href={CV} download="cv_colin_kevin.pdf" > Télécharger mon CV </a>
      </div>
    </div>
      
      

    


  
  
  );
}

export default Home;
