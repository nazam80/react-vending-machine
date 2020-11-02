import React, { useState, useEffect } from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import CoinList from './components/CoinList/CoinList'
import DisplayCredit from './components/DisplayCredit/DisplayCredit'

import {getProducts, buyProduct, calculateChangeBuyingProduct} from './lib/products'
import {getCoins, refillCoinById, calculateChange, removeChangeFromCoins} from './lib/coins'

function App() {
  const [products, setProducts] = useState([]);
  const [coins, setCoins] = useState([]);
  const [moneyInCents, setMoneyInCents] = useState(0);

  useEffect( () => { 
    setProducts(getProducts);
  }, []);

  useEffect( () => { 
    setCoins(getCoins);
  }, []);

  const handleBuyProduct = (productId)=>{
    try{
      const productsUpdated = buyProduct(products, productId, moneyInCents)
      setProducts( productsUpdated )
      setMoneyInCents(calculateChangeBuyingProduct(products, productId, moneyInCents) )    
    }catch(e){
      alert(e)
    }
  }

  const handleAddCoin = (coinId, coinValue)=>{
    try{
      const coinsUpdated = refillCoinById(coins, coinId, 1)
      setCoins( coinsUpdated )
      setMoneyInCents(moneyInCents + coinValue)
    }catch(e){
      alert(e)
    }
  }

  const handleGetMoney = ()=>{
    try{
      const change = calculateChange(moneyInCents, coins)
      const coinsUpdated = removeChangeFromCoins(coins, change)
      setCoins( coinsUpdated )
      setMoneyInCents(0)
    }catch(e){
      alert(e)
    }
  }


  return (
    <div className="App">
      <h3>My vending machine</h3>
      <div className="vm-container">        
        <div className="vm-products-container">        
          <ProductList
            products={products}
            buyProduct={handleBuyProduct}            
          />                  
        </div>
        <div className="vm-coins-container">                  
          <DisplayCredit
              credit={moneyInCents}
          />
          <CoinList
            coins={coins}
            addCoin={handleAddCoin}
          />  
          <div className="coin_buttons">
            <button onClick={()=>handleGetMoney()} className="get_money_btn">Get money</button>          
          </div>
        </div>             
      </div>
    </div>
  );
}

export default App;
