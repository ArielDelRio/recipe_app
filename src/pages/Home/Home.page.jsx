import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';
import Recipes from '../../components/Recipes/Recipes.component';
import DefaultPage from './Default.page';

import {LangContext} from '../../Context/Lang.context';
import SearchInput from "../../components/SearchInput/SearchInput.component";
import Loading from "../../components/Loading/Loading";


const APP_ID = '26b0e423';
const APP_KEY = 'c438f6649ee33185e891d09d6b720f1a';

const EDAMAM_API_POINT = 'https://api.edamam.com/'
const ES_EDAMAM_API_POINT = 'https://test-es.edamam.com/';

const CORS_ENABLE = 'https://cors-anywhere.herokuapp.com/';


const Home = () => {
  
  const {currentLang} = useContext(LangContext);

  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('RECIPES')) || [])
  const [notFoundError, setnotFoundError] = useState(false)
  const [loading, setloading] = useState(false);

  useEffect(() => {
    localStorage.setItem('RECIPES', JSON.stringify(recipes));
  }, [recipes]);

  const getRecipes = async (e) => {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;

    const domain_api_point = currentLang === 'en' ? EDAMAM_API_POINT : CORS_ENABLE + ES_EDAMAM_API_POINT;

    const api_request = `${domain_api_point}search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    setloading(true);
    axios.get(api_request).then((res)=> {
      setloading(false);
      setRecipes(res.data.hits);
      if(recipes.length == 0) setnotFoundError(true);
    }).catch((err) => {
      setloading(false);
      setnotFoundError(true)
    })
  }

  return (
    <>
      <div className="App">
        <SearchInput getRecipes={getRecipes}/>
        {loading ? <Loading/> : recipes.length ? <Recipes recipes={recipes} /> : 
          <DefaultPage notFoundError={notFoundError}/> 
        }
      </div>
    </>
  );
};

export default Home;
