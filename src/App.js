
import './App.css';
import pizza1 from './images/pizza1.jpg'
import pizza2 from './images/pizza2.jpg'
import pizza3 from './images/pizza3.jpg'
import pizza4 from './images/pizza4.jpg'
import pizza5 from './images/pizza5.jpg'
import Login from './components/Login'
import { useState } from 'react'
import {useEffect } from 'react'
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { createContext } from 'react';
import Header from './components/Header';
const images = [
  pizza1,
  pizza2,
  pizza3,
  pizza4,
  pizza5
];

export const loggedInUser = createContext();

function App() {

  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [products, setProducts] = useState();

  console.log(user);

  const sumQuantityProduct = (arr) => {
    return arr.reduce((quantity, item) => {
      return quantity = quantity + item.count;
    }, 0);
  }

  // fetch API lấy dữ liệu list of products
  useEffect(() => {
    fetch('https://api-demo-4gqb.onrender.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    const quantity = sumQuantityProduct(cart);
    setQuantityProduct(quantity)
  }, [cart]);

  const addProductToCart = (product) => {
    if (!product) return null;
    if (cart.indexOf(product) !== -1) {
      const index = cart.indexOf(product);
      const arr = [...cart];
      arr[index].count = arr[index].count + 1;
      setCart(arr);
    }
    else {
      const arr = [...cart];
      product.count = 1;
      arr.push(product);
      setCart(arr);
    }

  };

  const handleIncrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count + 1;
    setCart(arr);
  };

  const handleDecrease = (product) => {
    const index = cart.indexOf(product);
    const arr = [...cart];
    arr[index].count = arr[index].count - 1;

    const newArr = arr.filter((product) => {
      return product.count !== 0;
    });
    setCart(newArr);
  };

  const handleBuy = (product) => {
    addProductToCart(product);
  };

  const handleLoginSubmit = async (form) => {
    try {
      const res = await fetch('https://api-demo-4gqb.onrender.com/users/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      console.log('data', data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <loggedInUser.Provider value={user}>
      <div className="app">
        {/* Header */}
        <Header brand='Pizza House' handleOnClick={quantityProduct} />
        {/* Carousel */}
        <Carousel images={images}
          title='Neapolian Pizza'
          description='If you are looking for a traditional pizza the Neapolian is the best option!'
        />
        {/* Our Menu */}
        <Cards label='Our Menu' products={products} handleBuy={handleBuy} />
        {/* Footer */}
        <Footer />
        {/* Cart Popup */}
        <Cart cart={cart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
        <Login handleLoginSubmit={handleLoginSubmit} />
      </div>
    </loggedInUser.Provider >
  )
}

export default App;