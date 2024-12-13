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
import GradientBackground from "@/app/components/gradient";
import { Ionicons } from "@expo/vector-icons";

import { ExampleTabScreen } from "@/app/components/tabbar";

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
          Hydro animals with the keyword: {keyword} is not found...
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
          backgroundColor: "#012628",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // return <ExampleTabScreen />;

  return (
    <FlatList
      data={data?.data}
      renderItem={({ item }: { item: SpeciesDetails }) => (
        <GradientBackground
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: width * 0.8,
                height: 200,
              }}
              source={{ uri: item.image_url }}
            />
            <Text
              style={{
                color: "white",
              }}
            >
              {item.common_name}
            </Text>
            <Text
              style={{
                color: "white",
              }}
            >
              {item.description}
            </Text>

            {/* <Ionicons
              // onPress={{

              // }}
              style={{
                position: "absolute",
                right: 10,
                bottom: 30,
                backgroundColor: "#002e30",
                borderRadius: 12,
                padding: 3,
                borderColor: "white",
                borderWidth: 1,
              }}
              name="information"
              size={24}
              color="white"
            /> */}
          </View>
        </GradientBackground>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Species;
