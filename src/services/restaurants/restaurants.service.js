import {mocks,mockImages} from './mocks';
import camelize from 'camelize';

export const restaurantRequest = (location = "51.219448,4.402464")=>{
 return new Promise((resolve, reject)=>{
   const mock = mocks[location]
    if(!mock){
        reject('location not found')
    }
    resolve(mock)
  })    
}

export const restaurantTransform=({results=[]})=>{
const mapedResult = results.map((restaurant)=>{
 restaurant.photos = restaurant.photos.map((p)=>{
   return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
 })
  return {
    ...restaurant,
    isClosedTemporarily: restaurant.business_status ==="CLOSED_TEMPORARILY",
    isOpenNow:restaurant.opening_hours && restaurant.opening_hours.open_now,

  }
})
  return camelize(mapedResult)
}



