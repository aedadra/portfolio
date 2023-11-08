import { NavLink } from 'react-router-dom';
import "../styles/Header.scss"

function Header() {

    return (
        <div className='background'>
            <div className='header'>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeH1" : "pendingH1"
                } to="/portfolio"><h1>Clément Moulin</h1></NavLink>
                <div>
                    <nav className='header__link'>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "pending"
                        } to="/pages/competences"><p>Mes Competences</p></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "pending"
                        } to="../pages/realisations"><p>Mes Réalisations</p></NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header