import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LangContext, LANG } from '../../Context/Lang.context';

const Recipe = ({location}) => {

    const {currentLang} = useContext(LangContext);
    const recipe = location.state.recipe;

    return (
        <div className="container">
            <div className="active-recipe">
                <img className="active-recipe__img" src={recipe.image} alt={recipe.label}/>
            </div>
            <h3 className="active-recipe__title">{recipe.label}</h3>
            <h4 className="active-recipe__publisher">{LANG[currentLang].publisher}: <span>{recipe.source}</span></h4>
            <p className="active-recipe__website">{LANG[currentLang].website}: <span><a className="text-danger text-decoration-none" href={recipe.url}>{recipe.url}</a></span></p>
            <Link className=" btn btn-outline-danger" to='/'>{LANG[currentLang].go_home}</Link>
        </div>
    )
}



export default Recipe;