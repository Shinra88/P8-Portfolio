import Kasa from '../../asset/images/projets/kasa.webp';
import Nina from '../../asset/images/projets/nina.webp';
import Booki from '../../asset/images/projets/booki.webp';
import Grimoire from '../../asset/images/projets/grimoire.webp';
import ArchiWebos from '../../asset/images/projets/archiwebos.webp';
import Collapse from '../../components/collapse/Collapse';
import './Projets.scss';
function Projets() {
  return (
    <div className="Projets">
      <div className="Projets_contener">
        <h2>Portfolio</h2>
          <ul className='Projets_grid'>
            <li className='liBooki'>
              <h3>Booki</h3>
              <a href="https://booki-p2.netlify.app/">
              <img className="imgBooki" src={Booki} alt="Site booki" />
              </a>
              <Collapse title="Description du projet Booki" content=
              {<ul>
                {<li>Implémenter une interface responsive avec HTML et CSS.</li>}
                {<li>Versionner son projet avec Git et Github.</li>}
                {<li>Intégrer du contenu conformément à une maquette avec HTML et CSS.</li>}
                {<li>Installer un environnement de développement front-end.</li>}
                {<p>Les difficultées on été essentiellement de la misse en page css et du balisage sémentique.</p>}
              </ul>}/>
            </li>
            <li className='liArchiWebos'>
              <h3>ArchiWebos</h3>
              <a href="https://github.com/Shinra88/ArchiWebos">
              <img className="imgArchiwebos" src={ArchiWebos} alt="Site archiwebos" />
              </a>
              <Collapse title="Description du projet ArchiWebos" content=
                {<ul>
                  {<li>Manipuler les éléments du DOM avec JavaScript.</li>}
                  {<li>Récupérer les données utilisateurs dans le JavaScript via des formulaires.</li>}
                  {<li>Gérer les événements utilisateurs avec JavaScript.</li>}
                  {<p>Sur ce projet, j'ai appris à utilisé les méthodes fetch (await et then) ainsi que l'identification par token. il a été surtout centré sur l'apprentissage du JavaScript.</p>}
                </ul>}/>
            </li>
            <li className='liNina'>
                <h3>Nina Carducci</h3>
                <a href="https://photographe-nina-carducci.netlify.app/">
                <img className="imgNina" src={Nina} alt="Site nina" />
                </a>
              <Collapse title="Description du projet Nina Carducci" content=
                {<ul>
                  {<li>Optimiser les performances d’un site web.</li>}
                  {<li>Débugger un site web grâce aux Chrome DevTools.</li>}
                  {<li>Rédiger un cahier de recette pour tester un site.</li>}
                  {<p>Ce projet ma permis d'apprendre les différentes règles pour, le SEO, l'accessibilité, l'optimisation, le débug et le référencement.</p>}
                </ul>}/>            
                </li>
              <li className='liKasa'>
              <h3>Kasa</h3>
              <a href="https://projet-kaza.netlify.app">
              <img className="imgKasa" src={Kasa} alt="Site kasa" />
              </a>
              <Collapse title="Description du projet Kasa" content=
                {<ul>
                  {<li>Configurer la navigation entre les pages de l'application avec React Router.</li>}
                  {<li>Développer une interface web avec Sass.</li>}
                  {<li>Initialiser une application avec Create React App.</li>}
                  {<li>Développer des éléments de l'interface d'un site web grâce à des composants React.</li>}
                  {<li>Mettre en œuvre des animations CSS.</li>}
                  {<p>Ce projet ma appris l'utilisation de React, ainsi que la relation entre JavaScript et une base de donné pour en extraire les informations.</p>}
                </ul>}/>
            </li>
            <li className='liGrimoire'>
              <h3>Mon vieux grimoire</h3>
              <a href="https://github.com/Shinra88/Projet7-Back-end">
              <img className="imgGrimoire" src={Grimoire} alt="Site mon vieux grimoire" />
              </a>
              <Collapse title="Description du projet Mon vieux grimoire" content=
                {<ul>
                  {<li>Implémenter un modèle logique de données conformément à la réglementation.</li>}
                  {<li>Stocker des données de manière sécurisée.</li>}
                  {<li>Mettre en œuvre des opérations CRUD de manière sécurisée.</li>}
                  {<p>Ce projet demandais de créé entièrement un Backend (serveur + BDD) j'ai pu apprendre l'utilisation de mongo db, construire une api , utilisé node et express ainsi que des midleware comme sharp et multer entre autres</p>}
                </ul>}/>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Projets;