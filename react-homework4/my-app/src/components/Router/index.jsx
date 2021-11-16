import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Favourites from "../../pages/Favourites";
import Cart from "../../pages/Cart";
import NavBar from "../NavBar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/favourites' component={Favourites}/>
                <Route path='/cart' component={Cart}/>

            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter

