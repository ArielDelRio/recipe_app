import React, { useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import { LangContext, LANG } from "../../Context/Lang.context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipe = ({ location }) => {
  const { currentLang } = useContext(LangContext);
  const recipe = location.state?.recipe;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return !location.state ? (
    <Redirect to="/" />
  ) : (
    <div className="container px-lg-5 px-sm-2 pb-3">
      <div className="card light-card shadow">
        <LazyLoadImage
          effect="blur"
          className="image-recipe card-img-top img-fluid"
          style={{ height: "45vh" }}
          src={recipe.image}
          alt={recipe.label}
        />
        <div className="container-share-recipe d-flex justify-content-end">
          <a
            href={recipe.shareAs}
            target="_blank"
            className="btn-share-recipe btn btn-danger btn-lg rounded-circle shadow"
          >
            <svg
              width="1em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
              />
            </svg>
          </a>
        </div>
        <div className="card-body">
          <div className="d-lg-flex justify-content-between">
            <div>
              <h3 className="active-recipe__title">{recipe.label}</h3>
              <h4 className="active-recipe__publisher">
                {LANG[currentLang].publisher}: <span>{recipe.source}</span>
              </h4>
              <p>
                {LANG[currentLang].website}:{" "}
                <span>
                  <a
                    className="text-danger text-decoration-none"
                    href={recipe.url}
                    target="_blank"
                  >
                    {recipe.url}
                  </a>
                </span>
              </p>
            </div>
            <div className="">
              <Link
                className="btn btn-outline-danger"
                to={{
                  pathname: "/",
                }}
              >
                {LANG[currentLang].go_home}
              </Link>
            </div>
          </div>

          <div className="information">
            <div className="info-step1 row">
              <div className="calories col-md-4 p-4">
                <h5 className="h5 font-weight-light border-bottom border-primary">
                  {LANG[currentLang].calories}
                </h5>
                <div className="badge badge-info" style={{ fontSize: "1.3em" }}>
                  {recipe.calories}
                </div>
              </div>

              <div className="cautions col-md-4 p-4">
                <h5 className="h5 font-weight-light border-bottom border-danger">
                  {LANG[currentLang].cautions}
                </h5>
                <ul className="list-group list-group-flush">
                  {recipe.cautions.map((caution, i) => (
                    <li className="list-group-item" key={i}>
                      {caution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="healthLabels col-md-4 p-4">
                <h5 className="h5 font-weight-light border-bottom border-success">
                  {LANG[currentLang].healts}
                </h5>
                <ul className="list-group list-group-flush">
                  {recipe.healthLabels.map((health, i) => (
                    <li className="list-group-item" key={i}>
                      {health}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="info-step2">
              <div className="ingredients px-2">
                <h5 className="h5 font-weight-light">
                  {LANG[currentLang].ingredients}
                </h5>
                {recipe.ingredients.map((ingredient, i) => (
                  <div key={i} className="media border p-3 text-break">
                    <LazyLoadImage
                      effect="blur"
                      src={ingredient.image}
                      alt="ingredient image"
                      className="mr-3 mt-3 rounded-circle"
                      style={{ width: "60px" }}
                    />
                    <div className="media-body">
                      <h4>
                        {LANG[currentLang].weight}{" "}
                        <small>
                          <i>{ingredient.weight}</i>
                        </small>
                      </h4>
                      <p>{ingredient.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
