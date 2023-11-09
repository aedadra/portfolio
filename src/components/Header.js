import { NavLink } from 'react-router-dom';
import "../styles/Header.scss";

function Header() {

    return (
        <div className='background'>
            <div className='header'>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeH1" : "pendingH1"
                } to="/"><h1>Clément Moulin</h1></NavLink>
                <div>
                    <nav className='header__link'>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "pending"
                        } to="/competences"><p>Mes Compétences</p></NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "pending"
                        } to="/realisations"><p>Mes Projets</p></NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header