import React from 'react'
import {View,SafeAreaView,StatusBar,StyleSheet} from 'react-native'
import Searchbar from 'react-native-paper'

const isAndroid =Platform.OS == "android";
export const RestaurantScreen=()=>{
    <SafeAreaView style={{flex:1, marginTop: isAndroid ? StatusBar.currentHeight : 0}}>
      <View style={{padding:16,backgroundColor:'#fff'}}>
         <Searchbar placeholder ='city'/>
    </View>
    <View style={{flex:1,backgroundColor:'blue'}}>
        <Text style={styles.text}>TODO</Text>
    </View>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'yellow',
      padding:16
    },
    
  })