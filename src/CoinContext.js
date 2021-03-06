import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CoinContext = createContext();

export const CoinProvider = ({ children, query }) => {
  const [coins, setCoins] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://data.messari.io/api/v2/assets?limit=50`
        );
        setCoins({ hits: result.data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(coins.hits);
  }, [query]);
  return (
    <CoinContext.Provider value={[coins, setCoins]}>
      {children}
    </CoinContext.Provider>
  );
};
