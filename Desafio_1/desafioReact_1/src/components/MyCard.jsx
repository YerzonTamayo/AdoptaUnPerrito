import React  from "react"
import Card from 'react-bootstrap/Card';
import Tags from "./Tags";
export default function MyCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} style={{ width: '17.9rem', height: '14rem' }} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
         {props.descripcion}
        </Card.Text>
       <Tags color = {props.color} raza={props.raza}></Tags>
      </Card.Body>
    </Card>
  );
}

