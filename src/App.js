import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import ChooseMovie from "./choose-movie/ChooseMovie"
import Choosehour from "./choose-hour/ChooseHour"
import Bar from "./inf-bar/Bar"
import ChoosePlace from "./choose-place/ChoosePlace"
import FinalScreen from "./final/FinalScreen"
import Header from "./Header"


export default function App() {
   const [collect,setCollect] = useState({});
   const [otherInfos,setOtherInfos]=useState({});
    return (
        <>
    <BrowserRouter>
    <Header/>
    <Switch>

    <Route path="/" exact>
     <ChooseMovie/>   
    </Route>

    <Route path="/movie/:idMovie" exact>    
    <Choosehour collect={collect} setCollect={setCollect}/>
    
    </Route>

   

    <Route path="/session/:idSession" exact>  
    <ChoosePlace collect={collect} setCollect={setCollect} otherInfos={otherInfos} setOtherInfos={setOtherInfos}/>
    </Route>

    <Route path="/end" exact>  
    <FinalScreen collect={collect} otherInfos={otherInfos}/>
    </Route>

    </Switch>
    </BrowserRouter>
        </>
    );
}

