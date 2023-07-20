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
        <p>Mes Projets
          <ul>
            <li>
              <img src={Booki} alt="Site booki" />
              <a href="https://booki-p2.netlify.app/">Booki</a>
            </li>
            
            <li>
            <img src={Nina} alt="Site nina" />
            <a href="https://photographe-nina-carducci.netlify.app/">Nina Carducci</a>
            </li>
            
            <li>
            <img src={Kasa} alt="Site kasa" />
            <a href="https://projet-kaza.netlify.app/">Kasa</a>
            </li>
            
          </ul>
        </p>
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
