import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import{View,Text} from "react-native";
const App=()=>{
  
  return(
    <NavigationContainer>
      <MainStack/>
      
    </NavigationContainer>
  )
}



export default App;