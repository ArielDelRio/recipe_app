import React, { useContext } from 'react';
import { ReactComponent as RecipeImage } from '../../svg/recipe.svg';
import { ReactComponent as SmileImage } from '../../svg/smile.svg';
import { ReactComponent as SadFaceImage } from '../../svg/sad-face.svg';


import { LangContext, LANG } from '../../Context/Lang.context';

const DefaultPage = ({notFoundError}) => {

    const {currentLang} = useContext(LangContext);

    return (
        <>
            <RecipeImage style={{maxWidth: '40vh'}} className="pt-2"/>
            {notFoundError ? 
                <div className="pt-4">
                    <h2 className="d-inline helperText ">{LANG[currentLang].helper_text_not_found}</h2>
                    <SadFaceImage className="d-inline px-3" style={{maxWidth: '10vh'}}/>
                </div> :
                <div className="pt-4">
                    <h4 className="text-center font-weight">{LANG[currentLang].helper_text_question}</h4>
                    <h2 className="d-inline helperText">{LANG[currentLang].helper_text}</h2>
                    <SmileImage className="d-inline px-3" style={{maxWidth: '10vh'}}/>
                </div> 
            }
        </>
    )
}

export default DefaultPage;
