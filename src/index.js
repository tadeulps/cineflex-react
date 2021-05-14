import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import ChooseMovie from "./choose-movie/ChooseMovie"
import Choosehour from "./choose-hour/ChooseHour"
import Bar from "./inf-bar/Bar"
import ChoosePlace from "./choose-place/ChoosePlace"
import FinalScreen from "./final/FinalScreen"
import Header from "./Header"

function App() {
   
    return (
        <>
    <BrowserRouter>
    <Header/>
    <Switch>

    <Route path="/" exact>
     <ChooseMovie/>   
    </Route>

    <Route path="/movie/:idMovie" exact>    
    <Choosehour/>
    </Route>

   

    <Route path="/session/:idSession" exact>  
    <ChoosePlace/>
    </Route>

    <Route path="/end" exact>  
    <FinalScreen/>
    </Route>

    </Switch>
    </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));