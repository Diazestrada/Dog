import {ADD_DOG } from '../Types/dog.type';
const INITIAL_STATE = [

]

function dogReducer(state = INITIAL_STATE, action){
  const {type, payload} = action

  switch (type) {
    case ADD_DOG:
    console.log(payload,'informacion payload')
    // return [
    //   ...state,
    //   payload
    // ]  
    return [
      payload
    ]  
    default:
      return state
  }

}

export default dogReducer;