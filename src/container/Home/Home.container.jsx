import React, { useState, useEffect } from 'react'
import DogCard from '../../components/Dog/DogCard.component';
import { ApiRandom } from '../../helpers/Dog/random'



export default function Home() {

  const [infoImg, setInfoImg] = useState({});

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
    <div className="section">
      
      <DogCard urlDog={(infoImg)} />

    </div>
  )
}
