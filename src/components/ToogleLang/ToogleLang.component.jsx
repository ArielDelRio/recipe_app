import React, { useState, useContext } from 'react';
import './toogle_lang.css';

import {LangContext, LANG} from '../../Context/Lang.context';


const ToogleLang = () => {

    const {currentLang, setCurrentLang} = useContext(LangContext);

    return (
        <div className="toogle-container">
            <a className={`layer ${currentLang == 'en' ? 'blue-layer' : ''}`} onClick={() => setCurrentLang('en')}>
                <img className="lang-image" src="./images/english_language.png" alt=""/>
            </a>
            <a className={`layer ${currentLang == 'es' ? 'red-layer' : ''}`} onClick={() => setCurrentLang('es')}>
                <img className="lang-image" src="./images/spanish_language.png" alt=""/>
            </a>
        </div>
    )
}

export default ToogleLang