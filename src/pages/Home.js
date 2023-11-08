import '../styles/Home.scss';
import Identite from "../images/Identite.jpg"
import { Link } from 'react-router-dom';

function Home() {
  
  return (
	<div className='background'>
	  <div className='home'>
		  <img src={Identite} alt="" className='home__image' />
		  <div className='home__text'>
			  <div className='home__identite'>
				  <h1 className="home__title">Qui suis-je ?</h1>
				  <p>Bienvenue !</p>
				  <p>Je m'appel Clément, j'ai 29ans et je vis à Brest. Je suis en reconversion proffessionelle et j'ai suivi une formation de developpeur web. </p>
				  <p>Je vous présente donc mon site. N'hesitez pas à me contacter via le formulaire de contact.</p>
				  <p>Bonne visite !</p>
			  </div>
			  <div className='home__parcours'>
				  <h1 className="home__title">Mes experiences proffessionelles</h1>
				  <ul className="home__list">
					  <li>Mai à Novembre 2023 : formation de développeur web en ligne </li>
					  <li>Janvier à Avril 2023 : vendeur décorateur à Poltronesofa Brest</li>
					  <li>Février 2021 à octobre 2022 : directeur adjoint du magasin Carter Cash de Brest</li>
					  <li>Septembre 2018 à février 2021 : directeur adjoint du magasin Carter Cash de Tours</li>
					  <li>Aout 2016 à septembre 2018 : chef d’équipe en inventaire pour RGIS Tours</li>
					  <li>Aout 2014 à aout 2016 : assistant chef d’équipe en inventaire pour RGIS Tours</li>
					  <li>Septembre 2013 à aout 2014 : auditeur en inventaire pour RGIS Tours</li>
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
	  </div>
  );
}

export default Home;
