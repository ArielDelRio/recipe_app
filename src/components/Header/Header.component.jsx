import React, { useContext } from 'react';

import {LangContext, LANG} from '../../Context/Lang.context';
import ToogleLang from '../ToogleLang/ToogleLang.component';

const Header = () => {

  const { currentLang } = useContext(LangContext);
  
  return (
    <header className="App-header d-flex border-bottom border-danger">
      <h1 className="App-title flex-grow-1">
        {LANG[currentLang]['title']}
      </h1>
      <ToogleLang/>
      {/* <div className="dropdown ">
        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {LANG[currentLang]['languajes'][currentLang]}
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          {languajes.map((lang) => (
            <a className="dropdown-item" onClick={() => setCurrentLang(lang[0])} key={lang[0]}>{lang[1]}</a>
          ))}
        </div>
      </div> */}
    </header>
    )
}

export default Header;