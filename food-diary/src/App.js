import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
function App() {
  return (
   
      <div>
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          </div>
          </Router>
      </div>
    
  );
}

export default App;
