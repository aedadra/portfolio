import { NavLink } from 'react-router-dom';
import "../styles/Header.scss"

function Header() {

    return (
        <div className='background'>
        <div className='header'>
            <NavLink to="../" className='header__title'><h1>Clément Moulin</h1></NavLink>
            <div>
                <nav className='header__link'>
                    <NavLink to="../pages/competences" className='header__font'><p>Mes Competences</p></NavLink>
                    <NavLink to="../pages/realisations" className='header__font'><p>Mes Réalisations</p></NavLink>
                    <NavLink to="../pages/contact" className='header__font'><p>Contact</p></NavLink>
                </nav>
            </div>
        </div>
        </div>
    );
}

export default Header