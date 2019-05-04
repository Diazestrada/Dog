import React from 'react'
import Connect from '../../Hoc/Connect.hoc';
import DogCard from '../../components/Dog/DogCard.component';
import DogDescription from '../../components/Dog/Description.component'



function DetailsDog({ state }) {
  console.log(state.dogReducer[0], 'state')
  return (
    <div className="container" style={{marginLeft:"25%", marginTop:"10%"}}>
      <div className="row">
        <div className="row col-lg-12">
            <DogCard urlDog={state.dogReducer[0]} />
          <DogDescription/>
        </div>
      </div>
    </div>
  )
}

export default Connect(DetailsDog);