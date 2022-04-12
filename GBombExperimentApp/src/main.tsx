import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { RentPage } from "./pages/RentPage";
import { ThemeProvider } from './context/ThemeContext';

const App = () => (
  <ThemeProvider>
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/rent" component={RentPage} exact />
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Install NodeJS *or* NVM
// npm install -g yarn

// React.Context broken into: consumer & provider