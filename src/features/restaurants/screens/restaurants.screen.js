import React from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import Styled from 'styled-components/native'

import { RestaurantInfoCard } from "../components/restaurant-info.component";
import {SafeArea} from "../../../utils/safe-area.component"
const SearchView=Styled(View) `padding: ${(props)=>props.theme.sizes[1]};`

const ViewList = Styled(View) ` flex: 1; padding: ${(props)=>props.theme.sizes[1]}; background-color: ${(props)=>props.theme.colors.ui.tertiary}; `

export const RestaurantsScreen = () => (
  <SafeArea >
    <SearchView>
      <Searchbar />
    </SearchView>
    <ViewList>
      <FlatList
        data ={[{name:1},{name:2},{name:3},{name:4},{name:5},{name:6}]}
        renderItem={()=> <RestaurantInfoCard />}
        keyExtractor={(item)=>item.name}
        contentContainerStyle={{padding:16}}
      />
    </ViewList>
  </SafeArea>
);
