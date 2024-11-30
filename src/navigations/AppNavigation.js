import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Menu from '../screens/Menu/Menu';
import Aquatic from '../screens/Aquatic/Aquatic';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen 
    //         />
    //     </Stack.Navigator>
    // </NavigationContainer>
    <LinearGradient
        colors={['#002e30', '#012a2c', '#012628', '#022325', '#021f21', '#031c20', '#04181e', '#05141b', '#0a0f17', '#0c0910', '#080407', '#000000']}
        style={styles.container}
    >
        <Menu />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AppNavigation