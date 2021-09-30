import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Paginas/Home';
import TelaPesquisa from './Paginas/TelaPesquisa';


const Routes =  () =>{
    
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/telapesquisa" exact component={TelaPesquisa}/>
        </Switch>
    </BrowserRouter>)

    
}

export default Routes;