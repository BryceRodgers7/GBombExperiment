import * as React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { TextInput } from "../components/TextInput";
import { useThemeContext } from "../context/ThemeContext";

export function SearchButton() {
  return <Link to="/search">Search</Link>;
}

export function HomePage() {
  const [loginText, setLoginText] = React.useState("");
  const [passText, setPassText] = React.useState("");

  const { dark, toggleDark } = useThemeContext();

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home Page</p>
        <p>HOME</p>

        <p>
          <TextInput
            value={loginText}
            onChange={(event) => setLoginText(event.target.value)}
            placeholder="Username"
          />
        </p>

        <p>
          <TextInput
            value={passText}
            onChange={(event) => setPassText(event.target.value)}
            placeholder="password"
          />
        </p>

        <SearchButton />
        <p />
        <button onClick={handleOnClick}>Toggle dark mode</button>
        <p />

        <Footer />
      </header>
    </div>
  );
}
