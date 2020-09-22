import React from 'react';
import logo from './logo.svg';
import Ex1 from "./components/ex1.js"
import './App.css';
import {Carousel} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Ex1/>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.jardiland.com/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/d/r/dragonnier-lemon-lime-1378958-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.jardiland.com/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/d/r/dragonnier-lemon-lime-1378958-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.jardiland.com/media/catalog/product/cache/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/d/r/dragonnier-lemon-lime-1378958-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}
export default App;
