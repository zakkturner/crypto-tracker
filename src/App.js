import "./App.scss";
import SearchBar from "./com/SearchBar/SearchBar";

import CoinList from "./com/CoinList/CoinList";
import CoinDetails from "./pages/CoinDetails/CoinDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Eloheem's Crypto Tracker</h1>
      </header>
      <SearchBar />
      <Router>
        <Route exact path="/" component={CoinList} />
        <Route path="/coin-details/:slug" component={CoinDetails} />
      </Router>
    </div>
  );
}

export default App;
{
}
