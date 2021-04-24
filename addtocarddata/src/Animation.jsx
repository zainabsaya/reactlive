import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from './App';
import ViewCard from './ViewCard';
import AddtoCard from './AddToCard';
import NavBar from './NavBard';
import ViewCardItems from './ViewCardItems'
import Addcard from './Bootstrap5demo/Addcard';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Bootstrap5demo/Home'
const AnimationData = () =>
{
    return(
        <>
       {/* <Home/>  */}
        <NavBar/>
       <Switch>

           {/* <Route exact path="/AddtoCard" component={AddtoCard} />
           <Route exact path="/ViewCard" component={ViewCard} />
           <Route exact path="/App" component={App}/>
           <Route exact path="/ViewCardItems" component={ViewCardItems}/> */}
           <Route exact path="/Bootstrap5demo/Home" component={Home}/>
           <Route exact path="/Bootstrap5demo/Addcard/:id" component={Addcard}/>

       </Switch>
        </>
    )
}
export default AnimationData;