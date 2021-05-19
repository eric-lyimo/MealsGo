import {mocks} from './mocks';

export const restaurantRequest = (location =  "37.7749295,-122.4194155")=>{
 return new Promise((resolve, reject)=>{
   const mocks = mocks[location]
    if(!mock){
        reject('location not found')
    }
    resolve(mock)
  })    
}

export const restaurantTransform=({result=[]})=>{
const mapedResult = result.map((restaurants)=>{
    return{
      ...restaurants,
      isClosedTemporarily: restaurants.business_status === 'CLOSED TEMPORARILY',
      isOpenNow: restaurants.opening_hours && restaurants.opening_hours.open_now,
    }
        
})
}