import React from 'react'

import AllDog from '../../components/Dog/AllDog.component'

//!redux
import Connect from '../../Hoc/Connect.hoc';
import { addDog } from '../../shared/Redux/Actions/dog.actions'

function Dog({dispatch}) {
  
  const saveUrlDog= (urlDog) =>{
    dispatch(addDog(urlDog));

  }
  return (
    <div>
      <AllDog saveUrlDog={saveUrlDog}/>
    </div>
  )
}

export default Connect(Dog);
