import React,{useContext} from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import Styled from 'styled-components/native'
import {RestaurantContext, RestaurantContext} from '../../../services/restaurants/restaurants.context'

import { RestaurantInfoCard } from "../components/restaurant-info.component";
import {SafeArea} from "../../../utils/safe-area.component"
const SearchView=Styled(View) `padding: ${(props)=>props.theme.sizes[1]};`

const ViewList = Styled(View) ` flex: 1; padding: ${(props)=>props.theme.sizes[1]}; background-color: ${(props)=>props.theme.colors.ui.tertiary}; `

export const RestaurantsScreen = () => {
  const {restaurants,isLoading} = useContext(RestaurantContext)
  return(
    <SafeArea >
    <SearchView>
      <Searchbar />
    </SearchView>
    <ViewList>
      <FlatList
        data ={restaurants}
        renderItem={(item)=> <RestaurantInfoCard />}
        keyExtractor={(item)=>item.name}
        contentContainerStyle={{padding:16}}
      />
    </ViewList>
  </SafeArea>
  )
}
 
