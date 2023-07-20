import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./carrousel.scss";

export function ImageBanner(props) {
    const pictures = props.pictures;

    const [currentPicture, setCurrentPicture] = useState(0);

    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    };

    const moveNext = () => {
        setCurrentPicture(picture => (picture + 1) % pictures.length);
    };

    const movePrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
        setCurrentPicture(picture => picture - 1);
    };
        
    return(
 
    <div className="image__banner">
        {pictures.length > 1 && <button className="btn btn-previous" onClick={movePrevious}><FontAwesomeIcon icon={faChevronLeft} /></button>}
        {pictures.length > 1 && <span className="compteur">{currentPicture + 1} / {pictures.length}</span>}
        {pictures.length > 1 && <button className="btn btn-next"onClick={moveNext}><FontAwesomeIcon icon={faChevronRight} /></button>}
        {pictures.map((pic, i) => (
            <img key={pic} src={pic} alt="carrousel" className={getClassName(i)}></img>
        ))}
    </div>
    );
}

