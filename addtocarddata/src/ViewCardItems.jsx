import React from 'react';
import ViewCard from './ViewCard';
import AddToCard from './AddToCard';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Redirect, Route, Router, Switch } from 'react-router';


const ViewCardItems = ( props ) => {
    var db = "";
    db = JSON.parse( localStorage.getItem( "Additem" ) );
    var newdb = [ ...db ];
    console.log(newdb);
    return (
        <div>
                 <header id="site-header">
                <div className="container">
                    <h1>Shopping cart </h1>
                </div>
                <div>
            <Switch>
            <div>
            <NavLink exact to="/AddToCard"> AddToCard</NavLink>
            </div>
            </Switch>                             
                </div>
            </header>
            <div className="container">
                {
                    newdb.map( ( val, index ) => {
                        return <ViewCard key="index"
                                    ProductName={val.ProductName}
                                    file ={val.file}
                                    prise ={val.prise}
                                    quantity = {val.quantity}
                                    Id = {val.Id}                             
                        />;
                    })
                }

            </div>         </div>
    )

}
export default ViewCardItems;
