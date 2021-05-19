import React,{createContext,useState,useEffect, Children} from 'react';
import {RestaurantRequest,RestaurantTransform} from './restaurants.service'


export const RestaurantContext = createContext()

export const ContextProvider = (children)=>{
const [isLoading,setIsLoading]=useState(false);
const [restaurants,setRestaurants]=useState();
const [error,setError] = useState(null)

const retriveRestaurants=()=>{
    setIsLoading = true,
    setTimeout(() => {
        RestaurantRequest()
        .then(RestaurantTransform)
        .then((result)=>{
           setRestaurants(result) 
           setIsLoading(false)
        }).catch((err)=>{
            setError(err)
        })
    }, 3000);
   
}
useEffect(()=>{
    retriveRestaurants()
},[])
return(
    <RestaurantContext.Provider 
    value={{
        restaurants,
        error,
        isLoading
    }}>
        {children}
    </RestaurantContext.Provider>
)
}