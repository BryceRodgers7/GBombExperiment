import * as React from "react";
import logo from "../../logo.svg";
import "../../App.css";
import { Footer } from "../../components/Footer";
import { GBombGame, GBombGameFetcher } from "./gBombGameFetcher";
import { TextInput } from "../../components/TextInput";
import "./styles.css";
import { GBombGameTable } from "./GBombGameTable";

export function SearchPage() {
  const [count, setCount] = React.useState(readCountFromStorage());
  const [searchText, setSearchText] = React.useState("");
  const [allGamesWithName, setAllGamesWithName] = React.useState<GBombGame[]>(
    []
  );

  // Persist any count changes to sessionStorage
  React.useEffect(() => {
    sessionStorage.setItem("persisted-count", `${count}`);
  }, [count]);

  const onFeelingLuckyClick = async () => {
    console.log(`search clicked`);
    const response = await GBombGameFetcher.fetchAllGames(searchText);

    if (!response) {
      console.log("GBomb returned no items.");
      return;
    }

    console.log("All games", response);
    setAllGamesWithName(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GBomb Search Baby</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <br />
          <br />
          <TextInput
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search..."
          />
          <br />
          <br />
          <button type="button" onClick={onFeelingLuckyClick}>
            Search For Games!
          </button>
          <GBombGameTable games={allGamesWithName} />
        </p>
        <Footer />
      </header>
    </div>
  );
}

SearchPage.url = "/search";

function readCountFromStorage() {
  const maybeNumber = parseInt(`${sessionStorage.getItem("persisted-count")}`);
  return isNaN(maybeNumber) ? 5 : maybeNumber;
}
