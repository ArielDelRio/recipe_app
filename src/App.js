import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header.component';

import Home from './pages/Home/Home.page';
import Recipe from './pages/Recipe/Recipe.page';


import LangProvider from './Context/Lang.context';

const App = () => {
  return (
    <>
    <LangProvider>
        <Header/>
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/recipe/:id' component={Recipe}/>
          </Switch>
        </BrowserRouter>
      </LangProvider>
    </>
  );
};

export default App;
