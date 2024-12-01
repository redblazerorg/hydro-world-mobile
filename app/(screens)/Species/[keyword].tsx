import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { SpeciesSearchState } from "@/app/store/slice/hydro_slice";
import { useGetCategoryQuery } from "@/app/store/slice/api/hydro_api_slice";
import { SpeciesDetails } from "@/app/scheme/species_details";

const Species = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchResult: SpeciesSearchState = useSelector(
    (state: RootState) => state.hydroSlice
  );

  const { keyword } = useLocalSearchParams<{
    keyword: string;
  }>();

  const { data, isLoading, error } = useGetCategoryQuery(keyword, {
    skip: !keyword,
  });

  if (data?.data === null)
    return (
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Meals with the keyword: {keyword} is not found...
        </Text>
      </View>
    );

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="large" color="pink" />
      </View>
    );

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  return (
    <FlatList
      data={data?.data}
      renderItem={({ item }: { item: SpeciesDetails }) => (
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{ uri: item.image_url }}
          />
          <Text>{item.common_name}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Species;
