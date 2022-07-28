import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/app.css";
import AddProperty from "./AddProperty";
import Properties from "./Properties";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Surreal Estate</h2>
        </header>
        <NavBar>
          <Link className="item" to="/">
            View Properties
          </Link>
          <Link to="/add-property">Add a Property</Link>
        </NavBar>

        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
