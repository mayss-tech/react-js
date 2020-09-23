import React from 'react';
import Ex1 from "./components/ex1.js"
import './App.css';
import {Carousel} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Carousel> 
  <Carousel.Item>
    <img
      className="block"
      src="https://www.deco.fr/sites/default/files/styles/card_480x275/public/2020-06/shutterstock_1473478916.jpg?itok=qMWCTu2P"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Plantes d'intérieur</h3>
      <p>Les plantes, c’est fait, reste à trouver comment les exposer. Le bon meuble met en valeur une plante d’intérieur, 
        sans gêner, sans perturber, tout en s’intégrant dans la déco. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="block"
      src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fdeco.2Ftendance-deco.2Fplantes-interieur-nouvelle-tendance-deco-46869.2F14847279-1-fre-FR.2Fplantes-d-interieur-la-nouvelle-tendance-deco.2Ejpg/850x478/quality/90/crop-from/center/plantes-d-interieur-la-nouvelle-tendance-deco.jpeg"
      alt="second slide"
    />

    <Carousel.Caption>
      <h3>Nouvelle tendance déco</h3>
      <p>Etagères en mode forêt vierge, folie des pots suspendus, panoplie de mini-cactus ou collection de terrariums nouvelle génération,
      le vert s’invite à l’intérieur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="block"
      src="https://static.cotemaison.fr/medias_11824/w_600,h_600,c_fill,g_north/v1525420931/grande-plante-dans-un-salon_6054256.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Salon déco</h3>
      <p>Les plantes vertes sont une valeur sûre quand on cherche à décorer son intérieur rapidement. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Ex1/>
    </div>
  );
}
export default App;
