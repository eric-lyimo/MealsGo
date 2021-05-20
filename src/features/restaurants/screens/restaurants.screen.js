import React,{useContext} from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import Styled from 'styled-components/native'
import {RestaurantContext} from '../../../services/restaurants/restaurants.context'
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import {SafeArea} from "../../../utils/safe-area.component"
import {ActivityIndicator,Colors} from "react-native-paper"

const SearchView=Styled(View) `padding: ${(props)=>props.theme.sizes[1]};`

const ViewList = Styled(View) ` flex: 1; padding: ${(props)=>props.theme.sizes[1]}; background-color: ${(props)=>props.theme.colors.ui.tertiary}; `

const Loading = Styled(View)`position:absolute; left:50%; top:50%`

export const RestaurantsScreen = () => {
  const {restaurants,isLoading} = useContext(RestaurantContext)
  return(
    <SafeArea >
      {isLoading && (
        <Loading>
          <ActivityIndicator>
            size={50},
            color={Colors.blue},
            style={{marginLeft:-25}}
            animating={true}
          </ActivityIndicator>
        </Loading>
       )
      }
    <SearchView>
      <Searchbar />
    </SearchView>
    <ViewList>
      <FlatList
        data ={restaurants}
        renderItem={({item})=>{
        return(
          <RestaurantInfoCard restaurant={item} />
        );
      }}
        keyExtractor={(item)=>item.name}
        contentContainerStyle={{padding:16}}
      />
    </ViewList>
  </SafeArea>
  )
}
 
