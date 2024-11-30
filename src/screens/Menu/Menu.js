import React from 'react'
import { View, FlatList } from 'react-native'

import MenuButton from '../../components/MenuButton/MenuButton';
import { data } from '../../data/dataArrays';
import styles from './styles'

const Menu = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={MenuButton}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Menu