import React, { useState, useContext } from 'react';
import './toogle_lang.css';

import {LangContext} from '../../Context/Lang.context';

import EnglishLanguageImage from '../../svg/english_language.png';
import SpanishLanguageImage from '../../svg/spanish_language.png';


const ToogleLang = () => {

    const {currentLang, setCurrentLang} = useContext(LangContext);

    return (
        <div className="toogle-container">
            <a className={`layer ${currentLang == 'en' ? 'blue-layer' : ''}`} onClick={() => setCurrentLang('en')}>
                <img className="lang-image" src={EnglishLanguageImage} alt=""/>
            </a>
            <a className={`layer ${currentLang == 'es' ? 'red-layer' : ''}`} onClick={() => setCurrentLang('es')}>
                <img className="lang-image" src={SpanishLanguageImage} alt=""/>
            </a>
        </div>
    )
}

export default ToogleLang