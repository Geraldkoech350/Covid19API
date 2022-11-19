import React from 'react'
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import DashboardComponent from './Component/DashboardComponent';
import FooterComponent from './Component/FooterComponent';
import statisticsComponent from './Component/statisticsComponent';
import Analysis from './Component/AnalysisComponent/index';
import Navbar from './Component/Navbar';

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const DarkMode = () => {
    if (darkMode) {
      return "bg-dark text-light"
    }
    else
      return "bg-light text-dark"
  }

  return (

    <div className={DarkMode() + "container-fluid"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="">
        <Switch>
          <Route exact path="/" component={() => <DashboardComponent darkMode={darkMode} />} />
          <Route exact path="/statistics" component={() => <statisticsComponent darkMode={darkMode} />} />
          <Route exact path="/analysis" component={() => <Analysis />} />
          <Redirect to="/" />
        </Switch>
        <FooterComponent darkMode={darkMode} />
      </div>

    </div>
  )
}





