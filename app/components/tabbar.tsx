import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  Route,
  NavigationState,
} from "react-native-tab-view";

// Define prop types for the TabViewComponent
interface TabViewComponentProps {
  routes: Route[];
  renderScene: (props: { route: Route }) => React.ReactNode;
  initialIndex?: number;
  tabBarStyle?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const TabViewComponent: React.FC<TabViewComponentProps> = ({
  routes,
  renderScene,
  initialIndex = 0,
  tabBarStyle,
  indicatorStyle,
  labelStyle,
}) => {
  const [index, setIndex] = useState(initialIndex);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={[
            {
              backgroundColor: "#f0f0f0",
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarStyle,
          ]}
          tabStyle={[
            {
              backgroundColor: "black",
            },
            labelStyle,
          ]}
          indicatorStyle={[
            {
              backgroundColor: "blue",
              height: 3,
            },
            indicatorStyle,
          ]}
        />
      )}
    />
  );
};

// Example screen component to demonstrate usage
const ExampleTabScreen: React.FC = () => {
  // Define your routes with explicit typing
  const routes: Route[] = [
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
  ];

  // Define your scene renderer with proper typing
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case "first":
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "#ff4081",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>First Route</Text>
          </View>
        );
      case "second":
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "#673ab7",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Second Route</Text>
          </View>
        );
      case "third":
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "#4caf50",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Third Route</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TabViewComponent
      routes={routes}
      renderScene={renderScene}
      initialIndex={0}
      tabBarStyle={{ backgroundColor: "#e0e0e0" }}
      indicatorStyle={{ backgroundColor: "red" }}
      labelStyle={{ color: "darkblue" }}
    />
  );
};

export { TabViewComponent, ExampleTabScreen };
