import { useState } from "react";
import VectorOpen from "../images/VectorOpen.png";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {

    const [open, setOPen] = useState(false);
    const [toggle, setToggle] = useState(false);

    const OpenIt = () => {
        setOPen(!open);
        setToggle(!toggle)
    };

    return (
        <div className="collapse">
            <div className="collapse__title">
            
                <h3 className="collapse__title--h"> {title}</h3>
                <button onClick={OpenIt} className="collapse__title--img">
                    <img src={VectorOpen} alt="fleche vers le bas" className={toggle ? "up" : "down"} />
                    
                </button>
            </div>
            <div className="collapse__content">
                {open && <p>{content}</p>}
            </div>
        </div>
    );
}

export default Collapse