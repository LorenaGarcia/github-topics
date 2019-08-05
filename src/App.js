import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Topic from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

import GithubState from "./context/app/AppState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/topics/:name" component={Topic} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </GithubState>
  );
};

export default App;
