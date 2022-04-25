import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Coin from "./Coin";
import Header from "./Header";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
//////////////////////// API ASYNC/AWAIT METHOD////////////////////////////////
  // useEffect(() => {
//   const fetchItems = async () => {
//     const result = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
//     console.log(result.data);
//   }
//   fetchItems();
// }, [])
//////////////////////// API .THEN METHOD////////////////////////////////
useEffect(() => {
  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
      // console.log(res.data); // Optional: Used to check data
    }).catch(error => console.log(error))  // Optional: This is a "Promise" used to flag errors in the API connection
}, [])

// ////////THIS IS FOR THE SEARCH BAR///////////////////////
//Used to handle the search bar
const handleChange = e => {
  setSearch(e.target.value)
}

// This allows the search get a match w/o being case sensative 
const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
)
// ////////END OF SEARCH BAR FUNCTION///////////////////////

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      <div>
        <Header />       
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} rank={coin.market_cap_rank} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price} priceChange24={coin.price_change_24h} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} />
        );
      })};  
    </div>
  );
};

export default App;
