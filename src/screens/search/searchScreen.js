import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";

export default SearchScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Input
        placeholder="What movie do you want?"
        containerStyle={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
});
