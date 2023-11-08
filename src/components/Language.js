import "../styles/Language.scss"

function Language (props) {

    return (
        <div className="language">
            <h3 className="language__title">Langages et outils</h3>
            <p className="language__content">{props.language}</p>
        </div>
    );
}

export default Language