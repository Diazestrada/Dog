import React from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Card, CardImg, Button } from 'reactstrap';


export default function DogCard({ urlDog = [] }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-md-flex">
          <h4>Que esperar encuentra al mejor amigo del hombre!</h4>
          <Link to="/all">
          <Button color="primary">Ver mas</Button>
          </Link>
          </div>
        </div>
      </div>
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
