import { NavLink } from 'react-router-dom'
import './Footer.scss';

function Footer() {

    return (
        <div className="Footer_contener">
            <nav className='Footer_navbare'>
                <ul>
                    <li><NavLink to="/" 
                    className='Accueil'>
                    Accueil
                    </NavLink></li>

                    <li><NavLink to="/Projets" 
                    className='Projets'>
                    Portfolio
                    </NavLink></li>

                    <li><NavLink to="/Competences" 
                    className='Projets'>
                    Compétences
                    </NavLink></li>
                    
                    <li><NavLink to="/Contact" 
                    className='Contact'>
                    Contact
                    </NavLink></li>

                    
                </ul>
            </nav>
        </div>
     
    );
  }

export default Footer;