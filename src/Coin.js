import React from 'react'
import './Coin.css';

const Coin = ({ rank, name, image, symbol, price, volume, priceChange24, priceChange, marketcap }) => {
  
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <p className='rank'>{rank}</p>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          {/* toFixed sets the decimal point to the specified amount of digits */}
          <p className='coin-price'>${price >= 0.01 ? price.toFixed(2) : price.toFixed(8)}</p>
          {priceChange24 < 0 ? (<p className='coin-24h red'>${priceChange24.toFixed(6)}</p>)
                           : (<p className='coin-24h green'>${priceChange24.toFixed(8)}</p>)}
          {priceChange < 0 ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
                           : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
          {/* toLocaleString below formats it with commas */}
          <p className='coin-marketcap'>${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default Coin