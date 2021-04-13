import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
   
      <div>
    <Router>
      <div>
          <Route exact path="/" component={Home} />
          </div>
          </Router>
      </div>
    
  );
}

export default App;
