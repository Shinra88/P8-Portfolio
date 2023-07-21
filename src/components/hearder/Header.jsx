import { NavLink } from 'react-router-dom'
import './Header.scss';
import Banniere from '../banniere/Banniere';

function Header() {

    return (
        <div className="header_contener">
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
            <Banniere />
        </div>
     
    );
  }

export default Header;