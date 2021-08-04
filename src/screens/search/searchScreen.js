import i18n from "i18n-js";
import React from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";

export default SearchScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Input
        placeholder={i18n.t("searchScreen.searchField.hint")}
        containerStyle={styles.inputContainer}
      />
      <Button
        title={i18n.t("searchScreen.searchButton.text")}
        containerStyle={styles.buttonContainer}
      />
      <FlatList style={styles.searchResultsContainer} />
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
  buttonContainer: {
    marginHorizontal: "3%",
    width: "94%",
  },
  searchResultsContainer: {
    margin: 5,
  },
});
