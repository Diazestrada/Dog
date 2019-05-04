import React, { useState, useEffect } from 'react'
import DogCard from '../../components/Dog/DogCard.component';
import { ApiFindImgDog } from '../../helpers/Dog/random';
import { Link } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';




export default function AllDog() {
  const [getDog, setDogs] = useState([]);
  const getImga = async (brends) => {
    const res = await ApiFindImgDog();
    setDogs(res.message);
    console.log(res.message, 'response')
    return res;
  }

  useEffect(() => {
    getImga();
  }, []);



  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row col-lg-6">
            {getDog.map((item, index) => {
              return (
                <div className="col-sm-12 col-lg-3">
                  <Link key={index} to='/'>
                    <DogCard urlDog={(item)} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
