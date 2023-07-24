import CV from "../../asset/cv_colin_kevin.pdf"
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
        <ul>
          <li>BAC + 2, Développeur Web 2023</li>
          <li>BAC + 4, Concepteur Développeur Nouvelles Technologies 2023 - 2025</li>
          <a className="download" href={CV} download="cv_colin_kevin.pdf" > Télécharger mon CV </a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
