import React, { useState, useEffect } from 'react'
import DogCard from '../../components/Dog/DogCard.component';
import { ApiRandom } from '../../helpers/Dog/random'

import { Link } from 'react-router-dom'
import { Button} from 'reactstrap';


export default function Home() {

  const [infoImg, setInfoImg] = useState([]);

  const getInfo = async () => {
    const res = await ApiRandom();
    setInfoImg(res.message);
    console.log(res, 'res')
    return res;
  }
  useEffect(() => {
    getInfo();
  }, [])

  return (
    <div className="section" style={{marginTop:"10%"}}>
      <div className="row">
        <div className="col-lg-6">
          <h4>Que esperar encuentra al mejor amigo del hombre!</h4>
          <Link to="/all">
            <Button color="primary">Ver mas</Button>
          </Link>
        </div>
        <div className="row col-lg-6">
          {infoImg.map((item, index) => {
            return (
              <div className="col-sm-12 col-lg-3">
                <div className="d-md-flex">
                  <DogCard urlDog={item} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
