import React, { useState, createContext } from "react";

const CoinContext = createContext();

export const CoinProvider = () => {
  const [coins, setCoins] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://data.messari.io/api/v1/assets");
      setCoins({ hits: result.data });
    };
    fetchData();
    console.log(coins.hits);
  }, []);
  return <div></div>;
};
