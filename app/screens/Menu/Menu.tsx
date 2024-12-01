import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import data from "../../data/dataArrays";
import MenuButton from "../../components/MenuButton/MenuButton";

const Menu = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={MenuButton}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Menu;
