import React, { useContext, useState } from "react";

import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import axios from "axios";

import Header from "./components/Header/Header.component";

import Home from "./pages/Home/Home.page";
import Recipe from "./pages/Recipe/Recipe.page";

import { LangContext } from "./Context/Lang.context";

import CONFIG from "./config";

const App = () => {
  const { currentLang } = useContext(LangContext);

  const [state, setState] = useState({
    recipes: [],
    page: 0,
    recipeName: "",
    count: 0,
  });

  const [notFoundError, setnotFoundError] = useState(false);
  const [loading, setloading] = useState(false);

  const getRecipes = async (recipeNametoSearch, pageToSearch) => {
    pageToSearch = pageToSearch < 0 ? 0 : pageToSearch;

    //same recipeName and recipes in state
    if (
      state.recipes.length > pageToSearch * CONFIG.COUNT_RECIPES_FOR_PAGE &&
      recipeNametoSearch === state.recipeName
    ) {
      setState({ ...state, page: pageToSearch });
      return;
    }

    const domain_api_point =
      currentLang === "en"
        ? CONFIG.EDAMAM_API_POINT
        : CONFIG.CORS_ENABLE + CONFIG.ES_EDAMAM_API_POINT;

    const api_request = `${domain_api_point}search?q=${recipeNametoSearch}&app_id=${
      CONFIG.APP_ID
    }&app_key=${CONFIG.APP_KEY}&from=${
      pageToSearch * CONFIG.COUNT_RECIPES_FOR_PAGE
    }&to=${
      state.recipes.length > 0 && recipeNametoSearch === state.recipeName
        ? state.recipes.length * 2
        : CONFIG.COUNT_RECIPES_FOR_PAGE * 2
    }`;

    setloading(true);
    axios
      .get(api_request)
      .then((res) => {
        setloading(false);

        if (recipeNametoSearch !== state.recipeName) {
          setState({
            ...state,
            recipes: res.data.hits,
            count: res.data.count,
            page: 0,
            recipeName: recipeNametoSearch,
          });
        } else {
          setState({
            ...state,
            recipes: [...state.recipes, ...res.data.hits],
            count: res.data.count,
            page: pageToSearch,
            recipeName: recipeNametoSearch,
          });
        }

        if (state.recipes.length === 0) setnotFoundError(true);
      })
      .catch((err) => {
        setloading(false);
        setnotFoundError(true);
      });
  };

  return (
    <>
      <Header />
      <HashRouter basename="/">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  recipes={state.recipes}
                  page={state.page}
                  recipeName={state.recipeName}
                  count={state.count}
                  getRecipes={getRecipes}
                  loading={loading}
                  notFoundError={notFoundError}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Redirect path="*" to="/" />;
          </Switch>
        </BrowserRouter>
      </HashRouter>
    </>
  );
};

export default App;
