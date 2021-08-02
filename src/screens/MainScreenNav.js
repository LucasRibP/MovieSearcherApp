import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import SearchScreen from "./search/SearchScreen";

const Stack = createStackNavigator();

const MainScreenNav = () => {
  return (
    <View style={styles.componentContainer}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Search"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

export default MainScreenNav;
