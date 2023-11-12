import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Language from "../components/Language";
import "../styles/RealisationDetail.scss";
import project from "../components/project";
import {motion} from "framer-motion";

function ProjectDetails() {

	const params = useParams();
	const [projectDetail, setPorjectDetail] = useState();
	const navigate = useNavigate ()
	useEffect(() => {
		
		const picked = project.find(({ id }) => id === params.id)
		setPorjectDetail(picked) 
		if (picked === undefined) {
			navigate("Error", { state: { message: "Le projet n'existe pas" } })
		}
	}
	, [params, navigate]);
	
	const outils = projectDetail && projectDetail.language.map((language, id) => {
		return (<li key={id}>{language}</li>)
	});

	return (
		<div className="background">
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				<div key={params.id} className="projectDetails">
					{projectDetail &&
						<div className="projectDetails__content">
							<div className="projectDetails__title-image">
								<h1 className="projectDetails__title">{projectDetail.title} </h1>
								<img src={projectDetail.cover} alt="" className="projectDetails__image" />
							</div>
							<div className="projectDetails__description-outils">
								<div className="projectDetails__description">
									<h2>Description</h2>
									<p>{projectDetail.description}</p>
								</div>
								<Language language={outils} />
							</div>
							<div className="projectDetails__diffiicultes--place">
								<div className="projectDetails__diffiicultes">
									<h2>Mes problématiques</h2>
									<p>{projectDetail.difficultes}</p>
								</div>
							</div>
							<a href={projectDetail.lien} className="projectDetails__link">Lien vers le Github du projet</a>
						</div>
					}
				</div>
			</motion.main>
		</div>
	);
}

export default ProjectDetails