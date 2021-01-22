import React, { useContext, useState } from "react";
import "./SearchInput.css";
import { LangContext, LANG } from "../../Context/Lang.context";

const SearchInput = ({ getRecipes, recipeName }) => {
  const { currentLang } = useContext(LangContext);

  const [recipeNameValue, setrecipeNameValue] = useState(recipeName || "");

  const handleChange = (e) => {
    const recipeNameToSearch = e.target.value;
    setrecipeNameValue(recipeNameToSearch);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes(recipeNameValue);
  };

  return (
    <div id="cover">
      <form className="search_input_form" onSubmit={(e) => handleSubmit(e)}>
        <div className="tb">
          <div className="td">
            <input
              className="search_input"
              name="recipeName"
              type="text"
              placeholder={LANG[currentLang].search_placeholder}
              required
              autoComplete="off"
              onChange={handleChange}
              value={recipeNameValue}
            />
          </div>
          <div className="td" id="s-cover">
            <button type="submit" className="search_input_button">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
