import React from 'react'
import Badge from 'react-bootstrap/Badge';

export default function Tags(props) {
  return (
     <Badge bg={props.color} style={{ width: '16rem' }}>{props.raza}</Badge>
  )
}
