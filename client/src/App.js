import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';

function App() {
  return (
    <>
      <Router>
        <switch>
          <Navbar />
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
        </switch>
      </Router>
    </>
  );
}
export default App;
