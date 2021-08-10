import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import SearchScreen from "./search/SearchScreen";
import R from "res/R";
import i18n from "i18n-js";
import ResultScreen from "./result/ResultScreen";

const Stack = createStackNavigator();

const MainScreenNav = () => {
  return (
    <View style={styles.componentContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: i18n.t("searchScreen.header.title"),
              headerStyle: {
                backgroundColor: R.colors.primary,
              },
              headerTintColor: R.colors.white,
            }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={({ route }) => ({
              title: `${route.params.title} - ${route.params.year}`,
              headerStyle: {
                backgroundColor: R.colors.primary,
              },
              headerTintColor: R.colors.white,
            })}
          />
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
