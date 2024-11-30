import React from 'react'
import { View, Text, TouchableHighlight, Alert } from 'react-native'

import styles from './styles'

const MenuButton = ({ item }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={() => Alert.alert(`Pressed ${item.title}`)}>
        <View>
            <Text style={styles.buttonText}>{item.title}</Text>
        </View>
    </TouchableHighlight>
  )
}

export default MenuButton