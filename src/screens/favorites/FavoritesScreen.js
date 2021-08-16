import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default FavoritesScreen = () => {
  const favorites = useSelector((state) => state.favorites.value);
  return (
    <View style={styles.componentContainer}>
      <ResultsList results={Object.values(favorites)} />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    margin: 10,
  },
});
