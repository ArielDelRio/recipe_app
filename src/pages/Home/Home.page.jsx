import React from "react";
import Recipes from "../../components/Recipes/Recipes.component";
import DefaultPage from "./Default.page";

import SearchInput from "../../components/SearchInput/SearchInput.component";
import Loading from "../../components/Loading/Loading";

import CONFIG from "../../config";
import ArrowButton from "../../components/ArrowButton/ArrowButton.component";

const Home = ({
  recipes,
  count,
  page,
  recipeName,
  getRecipes,
  loading,
  notFoundError,
}) => {
  const recipesToShow = recipes.slice(
    page,
    page + CONFIG.COUNT_RECIPES_FOR_PAGE
  );

  return (
    <>
      <div className="App">
        <SearchInput
          getRecipes={(recipeNameToSearch) => getRecipes(recipeNameToSearch, 0)}
          recipeName={recipeName}
        />
        {loading ? (
          <Loading />
        ) : recipes.length ? (
          <Recipes
            recipes={recipesToShow}
            recipeName={recipeName}
            page={page}
          />
        ) : (
          <DefaultPage notFoundError={notFoundError} />
        )}

        {recipes.length > 0 && !loading && (
          <>
            <ArrowButton
              direction="left"
              disabled={page === 0}
              handleClick={(e) =>
                getRecipes(recipeName, page - CONFIG.COUNT_RECIPES_FOR_PAGE)
              }
            />
            <ArrowButton
              direction="right"
              disabled={page + CONFIG.COUNT_RECIPES_FOR_PAGE > count}
              handleClick={(e) =>
                getRecipes(recipeName, page + CONFIG.COUNT_RECIPES_FOR_PAGE)
              }
            />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
