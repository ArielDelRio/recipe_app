import React from "react";

import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';

import Home from './pages/Home/Home.page';
import Recipe from './pages/Recipe/Recipe.page';


import LangProvider from './Context/Lang.context';

const App = () => {
  return (
    <>
    <LangProvider>
        <Header/>
        <HashRouter basename='/'>
          <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/recipe/:id' component={Recipe}/>
            </Switch>
          </BrowserRouter>
        </HashRouter>
      </LangProvider>
    </>
  );
};

export default App;
