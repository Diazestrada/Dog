import React, { useState, useEffect } from 'react'
import DogCard from '../../components/Dog/DogCard.component';
import { ApiListDog , ApiFindImgDog } from '../../helpers/Dog/random'



export default function AllDog() {
 
  const [infoLis, setList] = useState([]);
  const [getDog, setDogs] = useState([]);
  const [posFinal, setPosFinal] = useState(0);

  const getInfo = async () => {
    const res = await ApiListDog();
    setList(Object.keys(res.message));
    let first = 10;
    const limit = posFinal + first;
    const list = Object.keys(res.message);
    let dogFind =list.filter((dog,index) => index > posFinal && index <= limit);
    getImga(dogFind);
    setPosFinal(limit);
    console.log('map', dogFind,'limit', limit)
    return res;
  }

  const getImga = async (brends) =>{
    
    const res = await ApiFindImgDog(brends, 4);
    setDogs(res);
    console.log(res,'response')
    return res;
  }

  useEffect(() => {
    getInfo();
  }, []);



  return (
    <div>
    
    </div>
  )
}
