import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import PriceCart from './Price Cart/PriceCart.jsx'
import data from './data.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {data.map(ele => (
      <PriceCart 
        key = {ele.subscriptionType}
        priceCartData = {ele}
      />
    ))}
    
  </React.StrictMode>,
)
