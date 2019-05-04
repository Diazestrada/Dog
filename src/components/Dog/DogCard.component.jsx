import React from 'react'
import { Card, CardImg } from 'reactstrap';



export default function DogCard({ urlDog }) {

  return (
      <Card>
        <CardImg width="100%" className="imgDog" src={!urlDog ? require('../../shared/media/dog_default.png') : urlDog} />
      </Card>
  )
}
