import project from '../components/project';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import "../styles/Realisation.scss";
import {motion} from "framer-motion";

function Project() {

    return (
        <div className='background'>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
            >
                <div className='projects'>
                    <h1 className='projects__title'>Mes projets</h1>
                    <div className='projects__content'>
                        {project.map((project, id) => {
                            return (
                                <div key={id} className='projects__card'>
                                    <Link to={`./realisationsDetails/${project.id}`}>
                                        <Card cover={project.cover} title={project.title} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>ù
            </motion.main>
        </div>
    );
}


export default Project;