import '../styles/Home.scss';
import Identite from "../images/Identite.jpg";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

function Home() {
  
	return (
		<div className='background'>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<div className='home'>
					<img src={Identite} alt="" className='home__image' />
					<div className='home__text'>
						<div className='home__identite'>
							<h1 className="home__title">Qui suis-je ?</h1>
							<p>Bienvenue !</p>
							<p>Je m'appelle Clément, j'ai 29 ans et je vis à Brest. Je suis en reconversion professionelle et j'ai suivi une formation de développeur web. </p>
							<p>Je suis plus orienté vers le Front-end mais je me développe petit à petit vers le Back-end.</p>
							<p>Je vous présente donc mon site. N'hésitez pas à me contacter via le bouton en bas de page.</p>
							<p>Bonne visite !</p>
						</div>
						<div className='home__parcours'>
							<h1 className="home__title">Mes expériences professionelles</h1>
							<ul className="home__list">
								<li>Mai à Novembre 2023 : formation de développeur web avec OpenClassroom </li>
								<li>Janvier à Avril 2023 : vendeur décorateur à Poltronesofa Brest</li>
								<li>Février 2021 à Octobre 2022 : directeur adjoint du magasin Carter Cash de Brest</li>
								<li>Septembre 2018 à Février 2021 : directeur adjoint du magasin Carter Cash de Tours</li>
								<li>Août 2016 à Septembre 2018 : chef d’équipe en inventaire pour RGIS Tours</li>
								<li>Août 2014 à Août 2016 : assistant chef d’équipe en inventaire pour RGIS Tours</li>
								<li>Septembre 2013 à Août 2014 : auditeur en inventaire pour RGIS Tours</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='contact'>
					<button className='submit'>
						<Link to='#'
							onClick={() => window.location = 'mailto:clement.moulin@yahoo.fr'}>
							Contactez-moi !
						</Link>
					</button>
				</div>
			</motion.main>
		</div>
	);
}

export default Home;





