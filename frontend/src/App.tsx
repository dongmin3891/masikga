import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Route component={Main} />
    </Router>
  );
}

export default App;
