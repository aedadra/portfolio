import { Link } from "react-router-dom";
import "../styles/error.scss";
import {motion} from "framer-motion";

function Error() {
    return (
        <div className="background">
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className="error">
                    <h1>404</h1>
                    <h3>oups, une erreur est survenue</h3>
                    <p>on retourne à la page d'accueil ?</p>
                    <Link to='/'>C'est par ici</Link>
                </div>
            </motion.main>
        </div>
    );
}

export default Error