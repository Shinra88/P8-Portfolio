import { NavLink } from 'react-router-dom'
import './Footer.scss';
import Banniere from '../banniere/Banniere';

function Footer() {

    return (
        <div className="Footer_contener">
            <nav className='navbare'>
                <ul>
                    <NavLink to="/" 
                    className='Accueil'>
                    Accueil
                    </NavLink>

                    <NavLink to="/Projets" 
                    className='Projets'>
                    Portfolio
                    </NavLink>

                    <NavLink to="/Competences" 
                    className='Projets'>
                    Compétences
                    </NavLink>
                    
                    <NavLink to="/Contact" 
                    className='Contact'>
                    Contact
                    </NavLink>

                    
                </ul>
            </nav>
        </div>
     
    );
  }

export default Footer;