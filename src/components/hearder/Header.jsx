import { NavLink } from 'react-router-dom'
import './Header.scss';
import Banniere from '../banniere/Banniere';
import { useEffect } from 'react';

function  Header() {

    useEffect(()=>{ 
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
console.log(sidenav)
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
    if (
  sidenav.classList.add("active"));
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}
});

    return (
        <div className="header_contener">
            <nav className='navbare'>
                <ul className='desktop_nav'>
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
                <div id="mySidenav" class="sidenav">
                    <button name="close_menu" type="button" id="closeBtn" class="close">×</button>
                    <ul>
                        <li><NavLink to="/" className='Accueil'>Accueil</NavLink></li>
                        <li><NavLink to="/Projets" className='Projets'>Portfolio</NavLink></li>
                        <li><NavLink to="/Competences" className='Projets'>Compétences</NavLink></li>
                        <li><NavLink to="/Contact" className='Contact'>Contact</NavLink></li>
                    </ul>
                </div>

                <button name="menu_burger" type="button" id="openBtn">
                <span class="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </button>
            </nav>
            <Banniere />
        </div>
     
    );
  }

export default Header;