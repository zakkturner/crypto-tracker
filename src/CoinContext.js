import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CoinContext = createContext();

export const CoinProvider = (props) => {
  const [coins, setCoins] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://data.messari.io/api/v1/assets");
      setCoins({ hits: result.data });
    };
    fetchData();
    console.log(coins.hits);
  }, []);
  return (
    <CoinContext.Provider value={[coins, setCoins]}>
      {props.children}
    </CoinContext.Provider>
  );
};
