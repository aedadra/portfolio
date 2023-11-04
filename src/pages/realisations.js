import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import "../styles/Realisation.scss"

function Project() {

    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch("/projets.json")
            .then((response) => response.json())
            .then((data) => {
                setProject(data)
            })
            .catch((error) => console.log(error))
    },[]);

    return (
        <div className='projects'>
            <h1 className='projects__title'>Mes projets</h1>
            <div className='projects__content'>
            {project.map((project, id) => 
                <div key={id} className='projects__card'>
                    <Link to={`./realisationsDetails/${project.id}`}>
                        <Card cover={project.cover} title={project.title} />
                    </Link>
                </div>
            )}
            </div>
        </div>
    );
}

export default Project;