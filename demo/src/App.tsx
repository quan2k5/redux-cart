import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './bootstrap.min.css'
import ListProduct from './components/ListProduct'
import Cart from './components/Cart'
function App() {
  return (
    <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className='row'>
          <ListProduct></ListProduct>
          <Cart></Cart>
        </div>
    </div>
  )
}
export default App