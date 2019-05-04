import {ADD_DOG } from '../Types/dog.type';

// * Actions -> los actions solo pueden regresar objetos planos
export function addDog(payload){
  return {
    type: ADD_DOG,
    payload
  }
}