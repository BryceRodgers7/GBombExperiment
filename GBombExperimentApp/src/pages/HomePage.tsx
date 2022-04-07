import * as React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export function SearchButton() {
  return <Link to="/search">Search</Link>;
}

export function HomePage() {
  // get ahold of the history object
  // call history.go()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home Page</p>
        <p>HOME</p>

        <SearchButton />

        <Footer />
      </header>
    </div>
  );
}
