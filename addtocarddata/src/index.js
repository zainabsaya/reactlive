import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ViewCard from './ViewCard';
import ViewCardData from './ViewCardData';
import ViewCardItem from './ViewCardItems';
import AddToCard from './AddToCard';
import Animation from './Animation';
import {BrowserRouter} from 'react-router-dom';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom' ; 
import Home from './Bootstrap5demo/Home';
import Addcard from './Bootstrap5demo/Addcard';
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>

    {/* <App /> */}
    {/* <AddToCard></AddToCard> */}
    <Switch>
    {/* <ViewCardItem/> */}
  <Animation/>
  <Home/>
  <Addcard/>
    </Switch>
  </BrowserRouter>
 

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
