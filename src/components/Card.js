import "../styles/Card.scss"

function Card({ cover, title }) {
	
	return (
		<article className="card">
			<img src={cover} alt=""  className="card__image"/>
			<h3 className="card__title">{title}</h3>
		</article>
	);
}

export default Card