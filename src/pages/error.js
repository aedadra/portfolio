import { Link } from "react-router-dom";
import "../styles/error.scss";

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <h3>oups, une erreur est survenue</h3>
            <p>on retourne à la page d'accueil ?</p>
            <Link to='/'>C'est par ici</Link>
        </div>
    );
}

export default Error