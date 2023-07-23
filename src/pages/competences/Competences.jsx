import LogoHtml from '../../asset/images/logos/logo_html.png';
import LogoCss from '../../asset/images/logos/logo_css.png';
import LogoSass from '../../asset/images/logos/logo_sass.png';
import LogoJs from '../../asset/images/logos/logo_javascript.png';
import LogoReactJs from '../../asset/images/logos/logo_react.png';
import LogoAngular from '../../asset/images/logos/logo_angular.png';
import LogoJquery from '../../asset/images/logos/logo_jquery.png';
import LogoNodeJs from '../../asset/images/logos/logo_node_js.png';
import LogoMySQL from '../../asset/images/logos/logo_mysql.png';
import LogoMongoDB from '../../asset/images/logos/logo_mongodb.png';
import LogoTypeScript from '../../asset/images/logos/logo_typescript.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Competences.scss';
function Competences() {
  return (
    <div className="Competences">
      <div className="Competences-contener">
        <h2>Compétences</h2>
        
        <h3><pre>Front-end                 Back-end</pre></h3>
        
        <div className='List_contener'>
          
          <div className='List'>
            
              <img className='html' src={LogoHtml} alt="logo html" />
              <img className='css' src={LogoCss} alt="logo css" />
              <img className='sass' src={LogoSass} alt="logo sass" />
              <img className='js'src={LogoJs} alt="logo js" />
              <img className='react'src={LogoReactJs} alt="logo react.js" />
              <img className='angular'src={LogoAngular} alt="logo angular" />
              <img className='ts'src={LogoTypeScript} alt="logo TypeScript" />
              <img className='jquery'src={LogoJquery} alt="logo jquery" />

            <p className='htmltxt'>HTML</p>
            <p className='csstxt'>CSS</p>
            <p className='sasstxt'>SASS</p>
            <p className='jstxt'>Java Script</p>
            <p className='reacttxt'>React.js</p>
            <p className='angulartxt'>Angular</p>
            <p className='tstxt'>TypeScript</p> 
            <p className='jquerytxt'>jQuery</p>

            <span className='htmlstars'>
              <FontAwesomeIcon className="htmlstars1" icon={faStar} />
              <FontAwesomeIcon className="htmlstars2" icon={faStar} />
              <FontAwesomeIcon className="htmlstars3" icon={faStar} /></span>

              <span className='cssstars'>
              <FontAwesomeIcon className="cssstars1" icon={faStar} />
              <FontAwesomeIcon className="cssstars2" icon={faStar} />
              <FontAwesomeIcon className="cssstars3" icon={faStar} /></span>

              <span className='sassstars'>
              <FontAwesomeIcon className="sassstars1" icon={faStar} />
              <FontAwesomeIcon className="sassstars2" icon={faStar} />
              <FontAwesomeIcon className="sassstars3" icon={faStar} /></span>

              <span className='jsstars'>
              <FontAwesomeIcon className="jsstars1" icon={faStar} />
              <FontAwesomeIcon className="jsstars2" icon={faStar} />
              <FontAwesomeIcon className="jsstars3" icon={faStar} /></span>

              <span className='reactstars'>
              <FontAwesomeIcon className="reactstars1" icon={faStar} />
              <FontAwesomeIcon className="reactstars2" icon={faStar} />
              <FontAwesomeIcon className="reactstars3" icon={faStar} /></span>

              <span className='angularstars'>
              <FontAwesomeIcon className="angularstars1" icon={faStar} />
              <FontAwesomeIcon className="angularstars2" icon={faStar} />
              <FontAwesomeIcon className="angularstars3" icon={faStar} /></span>
              
              <span className='tsstars'>
              <FontAwesomeIcon className="tsstars1" icon={faStar} />
              <FontAwesomeIcon className="tsstars2" icon={faStar} />
              <FontAwesomeIcon className="tsstars3" icon={faStar} /></span>

              <span className='jquerystars'>
              <FontAwesomeIcon className="jquerystars1" icon={faStar} />
              <FontAwesomeIcon className="jquerystars2" icon={faStar} />
              <FontAwesomeIcon className="jquerystars3" icon={faStar} /></span>

          </div>
          
          <div className='List2'>
           
              <img className='node' src={LogoNodeJs} alt="logo node.js" />
              <img className='mysl' src={LogoMySQL} alt="logo MySQL" />
              <img className='mongodb' src={LogoMongoDB} alt="logo Mongo DB" />
             
              <p className='nodetxt'>Node.js</p>
              <p className='mysqltxt'>MySQL</p>
              <p className='mongodbtxt'>Mongo DB</p>
            
            <span className='nodestars'>
              <FontAwesomeIcon className="nodestars1" icon={faStar} />
              <FontAwesomeIcon className="nodestars2" icon={faStar} />
              <FontAwesomeIcon className="nodestars3" icon={faStar} /></span>
            <span className='mysqlstars'>
              <FontAwesomeIcon className='mysqlstars1' icon={faStar} />
              <FontAwesomeIcon className='mysqlstars2' icon={faStar} />
              <FontAwesomeIcon className='mysqlstars3' icon={faStar} /></span>
            <span className='mongodbstars'>
              <FontAwesomeIcon className='mongodbstars1' icon={faStar} />
              <FontAwesomeIcon className='mongodbstars2' icon={faStar} />
              <FontAwesomeIcon className='mongodbstars3' icon={faStar} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;