import React from 'react';

import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Sign from "./Components/Login/Sign";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
//  <Router>
//    <div>
//    <Switch>
//  <Route path='/' exact component={Login}/>
//  <Route path='/sign' component={Sign}/>
//  <Route path='/Dashboard' component={Dashboard}/>
//  </Switch>
//  </div>
//  </Router>
<Dashboard></Dashboard>
  );
}

export default App;
