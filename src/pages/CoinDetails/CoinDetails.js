import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./CoinDetails.scss";

export default function CoinDetails() {
  let { slug } = useParams();
  const [coin, setCoin] = useState({ hit: [] });
  const [metrics, setMetrics] = useState({ hit: [] });
  useEffect(() => {
    const fetchData = () => {
      const result = axios
        .get(
          `https://data.messari.io/api/v2/assets/${slug.toLowerCase()}/profile`
        )
        .then((result) => setCoin({ hit: result.data }));
    };

    const fetchData2 = () => {
      const result = axios
        .get(
          `https://data.messari.io/api/v1/assets/${slug.toLowerCase()}/metrics`
        )
        .then((result) => setMetrics({ hit: result.data }));
    };
    fetchData();
    fetchData2();
    console.log(coin);
  }, []);

  return (
    <>
      {coin.hit.data === undefined ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <div className="coin-container" style={{ color: "#fff" }}>
          <div className="coin-head">
            <div className="info-container">
              <h2 className="coin-name">{coin.hit.data.name}</h2>
              <img
                className="coin-logo"
                src={`https://messari.io/asset-images/${coin.hit.data.id}/128.png?v=2`}
              />
              <h2 className="coin-symbol">{coin.hit.data.symbol}</h2>
            </div>
            <div className="price-container">
              {metrics.hit.data === undefined ? (
                <h3 className="loading">Loading...</h3>
              ) : (
                <h2 className="price">
                  ${metrics.hit.data.market_data.price_usd.toFixed(2)}
                </h2>
              )}
            </div>
          </div>
          <div className="coin-details">
            <p className="short-description">
              {coin.hit.data.profile.general.overview.tagline}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
