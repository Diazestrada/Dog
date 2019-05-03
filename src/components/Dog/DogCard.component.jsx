import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Card, CardImg, Button } from 'reactstrap';


export default function DogCard({ urlDog = [] }) {

  return (
    <div className="container">
      <Row>
        {urlDog !== undefined && urlDog.length > 0 && urlDog.map(function (item, index) {
          return (
            <Col xs="auto">
              <Card>
                <CardImg className="imgDog" src={!item ? require('../../shared/media/dog_default.png') : item} />
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
