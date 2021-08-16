import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import R from "res/R";

export default FavoritesPageButton = () => {
  const navigator = useNavigation();
  return (
    <Button
      icon={<Icon name="star" size={22} color={R.colors.golden} solid />}
      onPress={() => {
        navigator.navigate("Favorites");
      }}
      containerStyle={styles.componentContainer}
    />
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    ...R.palette.rightHeaderButton,
  },
});
