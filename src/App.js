import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./css/main.css"
import "./css/main.scss"
import Yangiliklar from "./pages/Yangiliklar";
import {ToastContainer} from "react-toastify";
import AdminMenus from "./pages/AdminMenus";

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/yangiliklar" exact component={Yangiliklar}/>
            <Route path="/admin/menus" exact component={AdminMenus}/>
          </Switch>

            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;