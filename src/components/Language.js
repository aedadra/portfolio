import "../styles/Language.scss";

function Language(props) {

    return (
        <div className="language">
            <h2 className="language__title">Langages et outils</h2>
            <p className="language__content">{props.language}</p>
        </div>
    );
}

export default Language