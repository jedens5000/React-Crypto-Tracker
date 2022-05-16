import React from "react";
import "./Coin.css";

export const Header = () => {
  return (
    <div className="coin-container">
      <div className="h-row">
          <h3 className="h-rank"># &nbsp; &nbsp; &nbsp; &nbsp; Coin</h3>
          <h3>Price</h3>
          <h3>24h Chg</h3>
          <h3>%</h3>
          <h3 className="h-mktcap">Mkt Cap</h3>
      </div>
    </div>
  );
};

export default Header;
