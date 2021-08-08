import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import R from "res/R";

export default ResultsListMessage = React.memo(
  ({ message }) => {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
  },
  (prev, next) => {
    return prev != next;
  }
);

const styles = StyleSheet.create({
  messageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  messageText: {
    color: R.colors.grey,
  },
});
