import React, { useContext } from 'react';
import './SearchInput.css';
import { LangContext, LANG } from '../../Context/Lang.context';


const SearchInput = ({getRecipes}) => {
    const {currentLang} = useContext(LangContext); 

    return (
        <div id="cover">
            <form className="search_input_form" onSubmit={getRecipes}>
                <div className="tb">
                    <div className="td">
                        <input className="search_input" name="recipeName" type="text" placeholder={LANG[currentLang].search_placeholder} required autoFocus autocomplete="off" />
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
    )
}

export default SearchInput;
