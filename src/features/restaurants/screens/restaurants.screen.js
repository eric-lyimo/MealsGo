import React from 'react'
import {View,SafeAreaView,StatusBar,StyleSheet,Text} from 'react-native'
import Searchbar from 'react-native-paper'

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <Text>TODO</Text>
    </View>
  </SafeAreaView>
);
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search:{
      padding: 16
    },
    list:{
      flex:1,
      backgroundColor:'blue',
      padding:16
    },
  })