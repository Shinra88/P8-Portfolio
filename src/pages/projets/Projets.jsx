import Kasa from '../../asset/images/projets/kasa.webp';
import Nina from '../../asset/images/projets/nina.webp';
import Booki from '../../asset/images/projets/booki.webp';
import Grimoir from '../../asset/images/projets/grimoir.webp';
import Collapse from '../../components/collapse/Collapse';
import './Projets.scss';
function Projets() {
  return (
    <div className="Projets">
      <div className="Projets_contener">
        <h2>Portfolio</h2>
          <ul className='Projets_grid'>
              <h3>Booki</h3>
              <a href="https://booki-p2.netlify.app/">
                <img className="imgBooki" src={Booki} alt="Site booki" />
              </a>
              <Collapse title="Description du projet Booki" content="Implémenter une interface responsive avec HTML et CSS, Versionner son projet avec Git et Github, Intégrer du contenu conformément à une maquette avec HTML et CSS,Installer un environnement de développement front-end"/>
            
              <h3>Kasa</h3>
              <a href="https://github.com/Shinra88/Projet7-Back-end">
               <img className="imgGrimoir" src={Grimoir} alt="Site mon vieux grimoir" />
              </a>
              <Collapse title="Description du projet Kasa" content="Configurer la navigation entre les pages de l'application avec React Router, Développer une interface web avec Sass, Initialiser une application avec Create React App, Développer des éléments de l'interface d'un site web grâce à des composants React, Mettre en œuvre des animations CSS"/>
          
            <h3>Nina Carducci</h3>
              <a href="https://photographe-nina-carducci.netlify.app/">
                <img className="imgNina" src={Nina} alt="Site nina" />
              </a>
              <Collapse title="Description du projet Nina Carducci" content="Optimiser les performances d’un site web, Débugger un site web grâce aux Chrome DevTools, Rédiger un cahier de recette pour tester un site"/>
            
            <h3>Kasa</h3>
              <a href="https://projet-kaza.netlify.app">
               <img className="imgKasa" src={Kasa} alt="Site kasa" />
              </a>
              <Collapse title="Description du projet Kasa" content="Configurer la navigation entre les pages de l'application avec React Router, Développer une interface web avec Sass, Initialiser une application avec Create React App, Développer des éléments de l'interface d'un site web grâce à des composants React, Mettre en œuvre des animations CSS"/>
          
              <h3>Kasa</h3>
              <a href="https://github.com/Shinra88/Projet7-Back-end">
               <img className="imgGrimoir" src={Grimoir} alt="Site mon vieux grimoir" />
              </a>
              <Collapse title="Description du projet Kasa" content="Configurer la navigation entre les pages de l'application avec React Router, Développer une interface web avec Sass, Initialiser une application avec Create React App, Développer des éléments de l'interface d'un site web grâce à des composants React, Mettre en œuvre des animations CSS"/>
          </ul>
      </div>
    </div>
  );
}

export default Projets;