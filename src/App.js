import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import DashboardComponent from './Component/DashboardComponent';
import FooterComponent from './Component/FooterComponent';
import statisticsComponent from './Component/statisticsComponent';
import Analysis from './Component/AnalysisComponent/index';
import Navbar from './Component/Navbar';

export default function App() {
  return (

    <div className="container-fluid">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={DashboardComponent} />
        <Route exact path="/statistics" component={statisticsComponent} />
        <Route exact path="/analysis" component={Analysis} />
        <Redirect to="/" />
      </Switch>
      <FooterComponent />
    </div>
  )
}





