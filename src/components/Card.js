import "../styles/Card.scss"

function Card({ cover, title }) {
	
	return (
		<article className="card">
			<img src={cover} alt=""  className="card__image"/>
			<p className="card__title">{title}</p>
		</article>
	);
}

export default Card