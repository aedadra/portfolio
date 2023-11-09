import project from '../components/project';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import "../styles/Realisation.scss";

function Project() {

    return (
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
        </div>
    );
}


export default Project;