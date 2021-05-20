import React,{createContext,useState,useEffect} from 'react';
import {restaurantRequest,restaurantTransform} from './restaurants.service'

export const RestaurantContext = createContext()

export const ContextProvider = ({children})=>{
const [restaurants,setRestaurants]=useState([]);
const [isLoading,setIsLoading]=useState(false);
const [error,setError] = useState(null)

const retriveRestaurants=()=>{
    setIsLoading(true)
    setTimeout(() => {
        restaurantRequest()
        .then(restaurantTransform)
        .then((result)=>{
           setRestaurants(result) 
           setIsLoading(false)
        }).catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    }, 2000);  
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