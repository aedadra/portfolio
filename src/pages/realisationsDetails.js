import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Language from "../components/Language";
import "../styles/RealisationDetail.scss"

function ProjectDetails() {

	const params = useParams();
	const [projectDetail, setPorjectDetail] = useState();


	useEffect(() => {
		fetch("/projets.json")
			.then((response) => response.json())
			.then((data) => {
				const picked = data.find(({ id }) => id === params.id)
				setPorjectDetail(picked)
				console.log(data)
				console.log(params.id)
			})
			.catch((error) => console.log(error))
	}, [params]);

	const outils = projectDetail && projectDetail.language.map((language, id) => {
		return (<li key={id}>{language}</li>)
	});

	return (
		<div key={params.id} className="projectDetails">
			{projectDetail &&
				<div className="projectDetails__content">
					<div className="projectDetails__title-image">
						<h1 className="projectDetails__title">{projectDetail.title} </h1>
						<img src={projectDetail.cover} alt="" className="projectDetails__image"/>
					</div>
					<div className="projectDetails__description-outils">
					<p className="projectDetails__description">{projectDetail.description}</p>
					<Language language={outils} />
					</div>
					<a href={projectDetail.lien} className="projectDetails__link">Lien vers le Github du projet</a>
				</div>
			}
		</div>
	)
}

export default ProjectDetails