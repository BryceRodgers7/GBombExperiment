import { Link } from "react-router-dom";
import * as React from "react";

export function Footer() {
  return (
    <div>
      <p>Navigation Buttons</p>

      <button>
        <Link to="/search">Search Page</Link>
      </button>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      <button>
        <Link to="/rent">Rent Page</Link>
      </button>
    </div>
  );
}
