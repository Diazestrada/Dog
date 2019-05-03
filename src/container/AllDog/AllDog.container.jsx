import React, { useState, useEffect } from 'react'
import DogCard from '../../components/Dog/DogCard.component';
import { ApiListDog, ApiFindImgDog } from '../../helpers/Dog/random'
import { get } from 'http';



export default function AllDog() {

  const [infoLis, setList] = useState([]);
  const [getDog, setDogs] = useState({});
  const [posFinal, setPosFinal] = useState(0);

  const getInfo = async () => {
    const res = await ApiListDog();
    setList(Object.keys(res.message));
    let first = 10;
    const limit = posFinal + first;
    const list = Object.keys(res.message);
    let dogFind = list.filter((dog, index) => index > posFinal && index <= limit);
    setPosFinal(limit);
    let firsDog = 20;
    const dog = dogFind.filter((dogs, indexs) => indexs <= firsDog);
    setPosFinal(firsDog);
    getImga(dog);
    console.log('map', dogFind, 'limit', limit, dog, 'dog')
    return res;
  }

  const getImga = async (brends) => {
    const res = brends.map(async dogss => {
      const res = await ApiFindImgDog(dogss, 4);
      setDogs(res.message);
      console.log(res.message, 'response')

    })
    return res;
  }

  useEffect(() => {
    getInfo();
  }, []);



  return (
    <div>
      <DogCard urlDog={ (getDog) }/>
    </div>
  )
}
