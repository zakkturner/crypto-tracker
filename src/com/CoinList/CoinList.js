import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CoinList.scss";
import { Router, Link } from "react-router-dom";

export default function CoinList() {
  const [coins, setCoins] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://data.messari.io/api/v1/assets");
      setCoins({ hits: result.data });
      console.log(coins.hits);
    };
    fetchData();
  }, []);
  return (
    // <Router>
    <div className="coinlist-container">
      <ul className="coinlist">
        {coins.hits.data === undefined ? (
          <h3 style={{ color: "#fff" }}>Loading...</h3>
        ) : (
          coins.hits.data.map((coin) => (
            <li key={coin.id} className="coin">
              <img
                className="coin-logo"
                src={`https://messari.io/asset-images/${coin.id}/128.png?v=2`}
                alt="logo"
              />
              <Link to={`/coin-details/${coin.symbol}`}>
                <h3 className="coin-name">{coin.name}</h3>
              </Link>
              <h3 className="coin-symbol">{coin.symbol}</h3>
              <h3 className="coin-price">
                ${coin.metrics.market_data.price_usd.toFixed(2)}
              </h3>
              <h3
                className={
                  coin.metrics.market_data.percent_change_usd_last_1_hour < 0
                    ? "coin-negative"
                    : "coin-positive"
                }
              >
                {coin.metrics.market_data.percent_change_usd_last_1_hour.toFixed(
                  2
                )}
                %
              </h3>
            </li>
          ))
        )}
      </ul>
    </div>
    // </Router>
  );
}
