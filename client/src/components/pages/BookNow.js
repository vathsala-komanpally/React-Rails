import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
const BookNow = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>BookNow:</h1>
        <p>New catalogue is comming soon<br />
    Every week, we will update a new catalogue.
    </p>

      </Container>
    </Jumbotron>
  );
}

export { BookNow };