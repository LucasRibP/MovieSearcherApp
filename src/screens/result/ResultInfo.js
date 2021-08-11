import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default ResultInfo = ({ data }) => {
  return (
    <View style={styles.componentContainer}>
      <Text>Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "100%",
    backgroundColor: "orangered",
    flex: 1,
  },
});
