import * as React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Footer } from "../components/Footer";

export function RentPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Rent!</p>
        <Footer />
      </header>
    </div>
  );
}
