import React, { useState } from 'react';
import home from '../images/home.jpeg';
import food from '../images/food.jpeg';
import drinks from '../images/drinks.jpeg';
import event from '../images/event.jpeg';
import { MainPageImage } from './MainPageImage';
import CardDeck from 'react-bootstrap/CardDeck';
import Figure from 'react-bootstrap/Figure';
//import {ItemsDisplay} from "../userInterface/ItemsDisplay";

const Home = () => {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={1400}
          height={60}
          src={home}
        />
        <Figure.Caption>
          Welcome to Lucky's Restaurent </Figure.Caption>
      </Figure>

      <CardDeck>
        <MainPageImage header={"our food"} text={"Being around a table with nice cuisine, drinks and great company is what  our heritage is all about. The W.A. Italian Club is inspired by  tradition and 1934’s menu is inspired by its cultural heritage with a modern touch, to ensure all  our patrons from many cultural backgrounds are able to come and enjoy  the experience."} image={food} />
        <MainPageImage header={"Your event"} text={"We have various spaces to suit your special event, be it a corporate  function, birthday party, wedding, baptism or confirmation. Events can  encompass formal sit down meals or cocktail functions. We can provide a  tailored package to meet your needs. Our on-hand master chefs and  service staff are committed to making your event a success "} image={event} />
        <MainPageImage header={"our drinks"} text={"Every great restaurant should have an incredible drinks menu to match. At 1934, we have spent time creating a list of delicious cocktails for you to enjoy, whilst keeping true to our heritage. We also have a wine list from all over Italy for you to try. Look out for our wine tasting nights, subscribe to our mailing list to be updated."} image={drinks} />
      </CardDeck>
    </div>

  )
}

export { Home };
