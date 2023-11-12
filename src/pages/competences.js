import Collapse from "../components/Collapse";
import "../styles/Competences.scss";
import competence from "../components/competences";
import {motion} from "framer-motion";

function Competences() {

    return (
        <div className="background">
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="competences">
                    <h1 className="competences__title">Mes compétences</h1>
                    <div className="competences__content">
                        {competence.map((competence, id) =>
                            <div key={id} className="competences__collapse">
                                <Collapse title={competence.title} content={competence.competences.map((competences, index) => { return (<li className="competences__li" key={index}>{competences}</li>) })} />
                            </div>
                        )}
                    </div>
                </div>
            </motion.main>
        </div>
    );
}

export default Competences