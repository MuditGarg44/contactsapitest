import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Login from './Container/Login';
import Dashboard from './Container/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/"
            component={Login}
          />
          <Route
           path="/dashboard"
           component={Dashboard}
           />
        </Router>
        
    </div>
    );
  }

}

export default App;
