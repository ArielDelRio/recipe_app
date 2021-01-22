import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { LangContext, LANG } from "../../Context/Lang.context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = ({ recipes, recipeName, page }) => {
  const { currentLang } = useContext(LangContext);

  return (
    <div className="container">
      <div className="row">
        {recipes.map(({ recipe }) => (
          <div key={recipe.uri} className="col-md-4 p-4">
            <div className="recipes__box">
              <div className="recipes__box_image_container">
                <LazyLoadImage
                  width="100%"
                  height="220px"
                  effect="blur"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.label.length < 20
                    ? `${recipe.label}`
                    : `${recipe.label.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">
                  <em>{LANG[currentLang].source}:</em> {recipe.source}
                </p>
              </div>
              <Link
                className="btn btn-outline-danger btn-block recipe_buttons"
                to={{
                  pathname: `recipe/${recipe.label}`,
                  state: {
                    recipe: recipe,
                  },
                }}
              >
                <h4>{LANG[currentLang].view_recipe_btn}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
