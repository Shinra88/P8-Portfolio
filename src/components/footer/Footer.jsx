import { NavLink } from 'react-router-dom'
import './Footer.scss';

function Footer() {

    return (
        <div className="Footer_contener">
            <nav className='Footer_navbare'>
                <ul>
                    <NavLink to="/" 
                    className='Accueil' aria="Accueil Footer">
                    Accueil
                    </NavLink>

                    <NavLink to="/Projets" 
                    className='Portfolio' aria="Portfolio Footer">
                    Portfolio
                    </NavLink>

                    <NavLink to="/Competences" 
                    className='Competences' aria="Competences Footer">
                    Compétences
                    </NavLink>
                    
                    <NavLink to="/Contact" 
                    className='Contact' aria="Contact Footer">
                    Contact
                    </NavLink>

                    
                </ul>
            </nav>
        </div>
     
    );
  }

export default Footer;