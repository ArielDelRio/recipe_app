import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { LangContext, LANG } from '../../Context/Lang.context';

const Recipes = ({recipes}) => {
    const {currentLang} = useContext(LangContext);

    return (
        <div className="container">
            <div className="row">
                {
                    recipes.map(({recipe}) => (
                        <div key={recipe.uri} className="col-md-4" style={{marginBottom:'2rem'}}>
                            <div className="recipes__box">
                                <img
                                className="img" 
                                src={recipe.image} 
                                alt={recipe.title}/>
                                <div className="recipe__text">
                                    <h5 className="recipes__title">{ recipe.label.length < 20 ? `${recipe.label}`: `${recipe.label.substring(0, 25)}...`}</h5>
                                    <p className="recipes__subtitle">
                                        <em>{LANG[currentLang].source}:</em> {recipe.source}
                                    </p>
                                </div>
                                <Link className="btn btn-outline-danger btn-block  recipe_buttons" 
                                    to={{ pathname: `recipe/${recipe.label}`, state:{ recipe: recipe} }}>
                                        <h4>{LANG[currentLang].view_recipe_btn}</h4>
                                </Link>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}


export default Recipes;