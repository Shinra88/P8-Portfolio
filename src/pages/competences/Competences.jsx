import LogoHtml from '../../asset/images/logo_html.png';
import LogoCss from '../../asset/images/logo_css.png';
import LogoSass from '../../asset/images/logo_sass.png';
import LogoJs from '../../asset/images/logo_javascript.png';
import LogoReactJs from '../../asset/images/logo_react.png';
import LogoAngular from '../../asset/images/logo_angular.png';
import LogoJquery from '../../asset/images/logo_jquery.png';
import LogoNodeJs from '../../asset/images/logo_node_js.png';
import LogoMySQL from '../../asset/images/logo_mysql.png';
import LogoMongoDB from '../../asset/images/logo_mongodb.png';
import LogoTypeScript from '../../asset/images/logo_typescript.png';
import './Competences.scss';
function Competences() {
  return (
    <div className="Competences">
      <div className="Competences-contener">
        <h2>Competences</h2>
        <h3>Front-end</h3>

        <div className='List'>
          <ul>
            <li>HTML <img src={LogoHtml} alt="logo html" /></li>
            <li>CSS <img src={LogoCss} alt="logo css" /></li>
            <li>SASS <img src={LogoSass} alt="logo ass" /></li>
            <li>Java Script <img src={LogoJs} alt="logo js" /></li>
            <li>React.js <img src={LogoReactJs} alt="logo react.js" /></li>
            <li>Angular <img src={LogoAngular} alt="logo angular" /></li>
            <li>jQuery <img src={LogoJquery} alt="logo jquery" /></li>
            <li>TypeScript <img src={LogoTypeScript} alt="logo TypeScript" /></li>
          </ul>
        </div>
        <h3>Back-end</h3>
        
        <div className='List'>
          <ul>
            <li>Node.js <img src={LogoNodeJs} alt="logo node.js" /></li>
            <li>MySQL <img src={LogoMySQL} alt="logo MySQL" /></li>
            <li>Mongo DB <img src={LogoMongoDB} alt="logo Mongo DB" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Competences;