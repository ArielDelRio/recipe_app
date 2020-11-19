import React, { useContext } from 'react'
import './Loading.css';

import CoverPlateImage from '../../svg/cover_plate.png';

import { LangContext, LANG } from '../../Context/Lang.context';


const Loading = () => {

    const {currentLang} = useContext(LangContext);

    return (
        <>
            <img src={CoverPlateImage} alt="cover_plate _image" className="swing" style={{width:'180px', height:'200px'}}/> 
            <h2 className="helperText loading" style={{marginTop:'-1.5em'}}>{LANG[currentLang].loading_text}</h2>
        </>
    )
}


export default Loading;