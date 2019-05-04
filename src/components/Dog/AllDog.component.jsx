import React, { useState, useEffect } from 'react'
import DogCard from './DogCard.component';
import { ApiFindImgDog } from '../../helpers/Dog/random';
import { withRouter } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroll-component';




function AllDog({saveUrlDog,history}) {
  const [getDog, setDogs] = useState([]);
  const getImga = async () => {
    const res = await ApiFindImgDog();
    setDogs(res.message);
    console.log(res.message, 'response')
    return res;
    // /to={`/details/${index}`}
  }

  const getData = (e) =>{
   console.log(e.target.src,'VALUE TARGET');
   let url = e.target.src;
   saveUrlDog(url);
   history.push('/details');
   

  }

  useEffect(() => {
    getImga();
  }, []);



  return (
    <div className="container">
      <InfiniteScroll
        dataLength={getDog.length}
        next={getImga}
        hasMore={true}
        loader={<h4>Cargando</h4>}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="row col-lg-6">
              {getDog.map((item, index) => {
                return (
                  <div className="col-sm-12 col-lg-3">
                    <div key={index} onClick={getData} >
                      <DogCard urlDog={(item)}/>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default withRouter(AllDog)
