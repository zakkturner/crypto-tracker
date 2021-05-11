import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./CoinDetails.scss";

export default function CoinDetails() {
  let { slug } = useParams();
  const [coin, setCoin] = useState({ hit: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://data.messari.io/api/v2/assets/${slug.toLowerCase()}/profile`
      );
      setCoin({ hit: result.data });
      console.log(coin.hit.data.profile);
    };
    fetchData();
  }, []);

  return (
    <>
      {coin.hit.data === undefined ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        <div className="coin-container" style={{ color: "#fff" }}>
          <div className="details-container">
            <h2 className="coin-name">{coin.hit.data.name}</h2>
            <p className="short-description"></p>
          </div>
        </div>
      )}
    </>
  );
}
