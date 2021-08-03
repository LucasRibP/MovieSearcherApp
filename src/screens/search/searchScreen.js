import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default SearchScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
