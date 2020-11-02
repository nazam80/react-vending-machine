import React from 'react';
import './CoinList.css';

const CoinsList = (props) => {
  
  
  return (
  <div className = 'coins_container'>
    {
      props.coins.map((coin, index) => {   
        return (
          <div className="coin_container" key={coin.id}>
            <div className="coin_name">{coin.label}</div>	          
            <div className="coin_available">Available: {coin.units}</div>
            <button onClick={()=>props.addCoin(coin.id, coin.cents)} className="coin_add_btn">Add</button>
          </div>
        )
      })
    }
  </div>  

  )
  
}

export default CoinsList;
