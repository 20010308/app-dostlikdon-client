import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./css/main.css"
import "./css/main.scss"
import Yangiliklar from "./pages/Yangiliklar";

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/yangiliklar" exact component={Yangiliklar}/>
          </Switch>
        </BrowserRouter>
    );
};

export default App;