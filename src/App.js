import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Tour from "./components/Tour";
import TourList from "./components/TourList";
import About from "./components/About";

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
            <TourList />
          </Route>
          <Route path="/tours">
            <Navbar />
            <TourList />
          </Route>
          <Route path="/">
            <Navbar />
            <TourList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
