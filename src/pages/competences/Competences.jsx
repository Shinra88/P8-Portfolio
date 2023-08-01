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
        
        <div className='List_contener'>
          
          <div className='Front_List'>

            <h3>Front-end</h3>

            <ul>
              <li>
              <span className='logoL'><img src={LogoHtml} alt="logo html" /></span>
                <p>HTML</p>
                <span>
                  <FontAwesomeIcon className="htmlstars1" icon={faStar} />
                  <FontAwesomeIcon className="htmlstars2" icon={faStar} />
                  <FontAwesomeIcon className="htmlstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img src={LogoCss} alt="logo css" /></span>
                <p>CSS</p>
                <span>
                  <FontAwesomeIcon className="cssstars1" icon={faStar} />
                  <FontAwesomeIcon className="cssstars2" icon={faStar} />
                  <FontAwesomeIcon className="cssstars3" icon={faStar} />
                </span>
              </li>
           
              <li>
              <span className='logoL'><img src={LogoSass} alt="logo sass" /></span>
                <p>SASS</p>
                <span>
                  <FontAwesomeIcon className="sassstars1" icon={faStar} />
                  <FontAwesomeIcon className="sassstars2" icon={faStar} />
                  <FontAwesomeIcon className="sassstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img className='js' src={LogoJs} alt="logo js" /></span>
                <p>Java Script</p>
                <span>
                  <FontAwesomeIcon className="jsstars1" icon={faStar} />
                  <FontAwesomeIcon className="jsstars2" icon={faStar} />
                  <FontAwesomeIcon className="jsstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img src={LogoReactJs} alt="logo react" /></span>
                <p>React</p>
                <span>
                  <FontAwesomeIcon className="reactstars1" icon={faStar} />
                  <FontAwesomeIcon className="reactstars2" icon={faStar} />
                  <FontAwesomeIcon className="reactstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img src={LogoAngular} alt="logo angular" /></span>
                <p>Angular</p>
                <span>
                  <FontAwesomeIcon className="angularstars1" icon={faStar} />
                  <FontAwesomeIcon className="angularstars2" icon={faStar} />
                  <FontAwesomeIcon className="angularstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img src={LogoTypeScript} alt="logo ts" /></span>
                <p>TypeScript</p>
                <span>
                  <FontAwesomeIcon className="tsstars1" icon={faStar} />
                  <FontAwesomeIcon className="tsstars2" icon={faStar} />
                  <FontAwesomeIcon className="tsstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img src={LogoJquery} alt="logo jquery" /></span>
                <p>Jquery</p>
                <span>
                  <FontAwesomeIcon className="jquerystars1" icon={faStar} />
                  <FontAwesomeIcon className="jquerystars2" icon={faStar} />
                  <FontAwesomeIcon className="jquerystars3" icon={faStar} />
                </span>
              </li>
            </ul>

          </div>
          
          <div className='Back_List'>

            <h3>Back-end</h3>
           
            <ul>
              <li>
              <span className='logoL'><img src={LogoNodeJs} alt="logo node" /></span>
                <p>Node.Js</p>
                <span>
                  <FontAwesomeIcon className="nodestars1" icon={faStar} />
                  <FontAwesomeIcon className="nodestars2" icon={faStar} />
                  <FontAwesomeIcon className="nodestars3" icon={faStar} />
                </span>
              </li>
            
              <li>
                <span className='logoL'><img src={LogoMySQL} alt="logo mysql" /></span>
                <p>MySQL</p>
                <span>
                  <FontAwesomeIcon className="mysqlstars1" icon={faStar} />
                  <FontAwesomeIcon className="mysqlstars2" icon={faStar} />
                  <FontAwesomeIcon className="mysqlstars3" icon={faStar} />
                </span>
              </li>
            
              <li>
              <span className='logoL'><img className='mongodb' src={LogoMongoDB} alt="logo mongodb" /></span>
                <p>Mongo Db</p>
                <span>
                  <FontAwesomeIcon className="mongodbstars1" icon={faStar} />
                  <FontAwesomeIcon className="mongodbstars2" icon={faStar} />
                  <FontAwesomeIcon className="mongodbstars3" icon={faStar} />
                </span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;