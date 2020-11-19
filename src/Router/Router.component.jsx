import { fn } from 'jquery';
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home.page';

import Recipe from '../components/Recipe/Recipe.component';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/recipe/:id' component={Recipe}/>
        </Switch>
    </BrowserRouter>
);


export default Router;
