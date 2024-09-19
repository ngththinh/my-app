
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

function App() {
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
      <div class="menu all">
        <h2 class="our-menu">Our Menu</h2>
        <div class="row row-cols-1 row-cols-md-4">
          <div class="col mb-3">
            <div class="card">
              <div className="sale">Sale</div>
              <img src={menu1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Margherita Pizza</h5>
                <p class="card-text"><del>$40.00</del><span className='new-price'>$24.00</span></p>
                <a href="#" class="btbuy">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
              <img src={menu2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mushroom Pizza</h5>
                <p class="card-text">$25.00</p>
                <a href="#" class="btbuy">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
            <div className="sale">New</div>
              <img src={menu3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Hawaiian Pizza</h5>
                <p class="card-text">$30.00</p>
                <a href="#" class="btbuy">Buy</a>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <div class="card">
            <div className="sale">Sale</div>
              <img src={menu4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pesto Pizza</h5>
                <p class="card-text"><del>$50.00</del><span className='new-price'>$30.00</span></p>
                <a href="#" class="btbuy">Buy</a>
              </div>
            </div>
          </div>
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
    </>
  );
}

export default App;
