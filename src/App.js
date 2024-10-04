
import './App.css';
import menu1 from './images/menu1.jpg'
import menu2 from './images/menu2.jpg'
import menu3 from './images/menu3.jpg'
import menu4 from './images/menu4.jpg'
import pizza1 from './images/pizza1.jpg'
import pizza2 from './images/pizza2.jpg'
import pizza3 from './images/pizza3.jpg'
import pizza4 from './images/pizza4.jpg'
import pizza5 from './images/pizza5.jpg'
import { FaSearch } from "react-icons/fa"
import { useState } from 'react'
import { Button, Badge, Modal, Row } from 'react-bootstrap'
import {useEffect } from 'react'
import { CgEnter } from 'react-icons/cg';

const products = [
  {
    name: 'Margherita Pizza',
    image: menu1,
    Price: 40,
    salePrice: 24,
  },
  {
    name: 'Mushroom Pizza',
    image: menu2,
    price: 40,
  }, {
    name: 'Hawaiian Pizza',
    image: menu3,
    price: 40,
  },
  {
    name: 'Pesto Pizza',
    image: menu4,
    price: 40,
    salePrice: 30
  },
]
function App() {
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState(0);

  console.log(cart);

  const sumQuantityProduct = (arr) => {
    return arr.reduce((quantity, item) => {
      return quantity = quantity + item.count;
    }, 0);
  }

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

    console.log('arr', newArr)
    setCart(newArr);
  };


  const handleBuy = (product) => {
    addProductToCart(product);
  };
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light all">
        <h2 class="navbar-brand" href="#">Pizza House</h2>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><FaSearch /></button>
          </form>
          <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
            Items: <span className="badge badge-secondary badge-dark">{quantityProduct}</span>
          </button>
        </div>
      </nav>
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pizza1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pizza2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pizza3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pizza4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pizza5} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
          <div class="content">
            <h3>Neapolitan Pizza</h3>
            <h5>If you are looking for a traditional Italian pizza the Neapolitan is the best option!</h5>
          </div>
        </div>
      </div>
      <div className="menu-card all">
        <h1 className="menu-title">Our Menu</h1>
        <div className="card-group">

          {products.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="sale">New</div>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><span className="older-price">${item.price}.00</span>
                    {item.salePrice ? (<span className="new-price"> ${item?.salePrice}.00</span>) : <></>}
                  </p>
                  <button className="btn-lg btn-block btn-dark" onClick={() => { handleBuy(item) }}>Buy</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div class="all">
        <h2 class="book">Book Your Table </h2>
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity"></label>
              <input type="text" class="form-control" placeholder="Your Name*" id="inputCity" />
            </div>

            <div class="form-group col-md-4">
              <label for="inputZip"></label>
              <input type="text" class="form-control" placeholder="Your Email*" id="inputZip" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState"></label>
              <select id="inputState" class="form-control">
                <option selected>Select a Service</option>
                <option>...</option>
              </select>
            </div>

          </div>
          <div>
            <label for="exampleFormControlTextarea1"></label>
            <textarea class="form-control" placeholder="Please write your comment" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="sendmess">Send Message</button>
        </form>
      </div>
      <div>
      <div
     className="modal show"
     style={{ display: 'block', position: 'initial' }}
   >
       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body container" style={{maxHeight: '80px'}}>
              {cart.map((product, index) => {
                return (
                  <div className='row cart-item' key={index} style={{justifyContent: 'space-between'}}>
                    <div className="card mb-3 col-md-4 cart-item-card"  style={{padding: '0', margin: '0 0 0 15px'}}>
                      <div className="row no-gutters cart-item-detail">
                        <div className="col-md-4" style={{width: '100px', height: '100px'}}>
                          <img src={product.image} alt="..."  style={{width: '50px', height: '50px'}}/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body" style={{padding: '0'}}>
                            <p className="card-title" style={{margin: '0 0 0 10px'}}>{product.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart-item-addition-quantity col-md-3'>{product.count}</div>
                    <div className='cart-item-addition col-md-3' style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
                      <button className='cart-item-addition-increase btn btn-plus ' style={{height: '40px', width: '50px'}} onClick={() => { handleIncrease(product) }}> + </button>
                      <button className='cart-item-addition-decrease btn btn-danger' style={{height: '40px' , width: '50px'}} onClick={() => { handleDecrease(product) }}> - </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
