import "../styles/Card.scss";

function Card({ cover, title }) {

	return (
		<article className="card">
			<img src={cover} alt="" fetchpriority="high" className="card__image" />
			<h2 className="card__title">{title}</h2>
		</article>
	);
}

export default Card