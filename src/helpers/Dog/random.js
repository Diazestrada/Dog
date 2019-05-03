//import axios from 'axios'
const urldog = 'https://dog.ceo/api/';


export async function ApiRandom(){
  const res = await fetch(`${urldog}breeds/image/random/2`)
  const resJson = await res.json();
  return resJson;
}

export async function ApiListDog(){
  const res = await fetch(`${urldog}breeds/list/all`)
  const resJson = await res.json();
  return resJson;
}

export async function ApiFindImgDog(breeds, count){
  const res = await fetch(`${urldog}breed/${breeds}/images/random/${count}`)
  const resJson = await res.json();
  return resJson;

}


