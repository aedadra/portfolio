import { useState } from "react";
import { useEffect } from "react";
import Collapse from "../components/Collapse";
import "../styles/Competences.scss"

function Competences() {

    const [competence, setCompetences] = useState([]);

    useEffect(() => {
        fetch("/competences.json")
            .then((response) => response.json())
            .then((data) => {
                setCompetences(data)               
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="competences">
            <h1 className="competences__title">Mes competences</h1>
            <div className="competences__content">
            {competence.map((competence, id) =>
                <div key={id} className="competences__collapse">
                    <Collapse title={competence.title} content={competence && competence.competences.map((competences, index) => { return (<li className="competences__li" key={index}>{competences}</li>) })} />
                </div>
            )}
            </div>    
            
        </div>
    );
}

export default Competences