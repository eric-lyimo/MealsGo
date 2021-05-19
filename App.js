import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {Text} from "react-native"
import { ThemeProvider } from "styled-components/native";
import {theme} from "./src/infrastructure/theme"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import {SafeArea} from "./src/utils/safe-area.component"
import { Ionicons } from "@expo/vector-icons";
import {ContextProvider} from './src/services/restaurants/restaurants.context';

const Tab =createBottomTabNavigator()

const SettingScreen =() =>(
<SafeArea> 
  <Text >setting</Text>
</SafeArea>
)
const MapScreen = ()=> (
<SafeArea>
    <Text>map</Text>
  </SafeArea>
  )

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ContextProvider>
      <NavigationContainer>
         <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Restaurants") {
              iconName = "md-restaurant";
            } else if (route.name === "Setting") {
              iconName = "md-settings";
            } else if (route.name === "Map") {
              iconName = "md-map";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}>
           <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
           <Tab.Screen name="Map" component={MapScreen}/>
           <Tab.Screen name="Setting" component={SettingScreen}/>
         </Tab.Navigator>
       </NavigationContainer>
      </ContextProvider>
    </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}