import React, { useContext, useState } from "react";
import "./App.scss";
import SearchBar from "./com/SearchBar/SearchBar";
import CoinList from "./com/CoinList/CoinList";
import CoinDetails from "./pages/CoinDetails/CoinDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinProvider } from "./CoinContext";

function App() {
  const [query, setQuery] = useState("");

  return (
    <CoinProvider query={query}>
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Eloheem's Crypto Tracker</h1>
        </header>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <Router>
          <Route exact path="/" render={() => <CoinList />} />
          <Route path="/coin-details/:slug" component={CoinDetails} />
        </Router>
      </div>
    </CoinProvider>
  );
}

export default App;
{
}
