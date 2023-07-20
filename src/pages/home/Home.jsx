import logo from '../../asset/images/logo.svg';
import Kasa from '../../asset/images/kasa.jpg';
import Nina from '../../asset/images/nina.jpg';
import Booki from '../../asset/images/booki.jpg';
import './Home.css';
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Mes Projets</h1>
          <ul>
            <li>
              <h2>Booki</h2>
              <a href="https://booki-p2.netlify.app/">
                <img className="imgBooki" src={Booki} alt="Site booki" />
              </a>
            </li>
            
            <li>
            <h2>Nina Carducci</h2>
              <a href="https://photographe-nina-carducci.netlify.app/">
                <img className="imgNina" src={Nina} alt="Site nina" />
              </a>
            </li>
            
            <li>
            <h2>Kasa</h2>
              <a href="https://projet-kaza.netlify.app/">
               <img className="imgKasa" src={Kasa} alt="Site kasa" />
              </a>
            </li>
          </ul>
        
        <a
          className="App-link"
          href="https://github.com/Shinra88"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir mon GitHub
        </a>
      </header>
    </div>
  );
}

export default Home;
