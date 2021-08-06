import i18n from "i18n-js";
import React from "react";
import { FlatList } from "react-native";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import ResultsList from "./ResultsList";
import { useGetMoviesByNameQuery } from "../../library/networking/omdbAPI";

export default SearchScreen = () => {
  const { data, error, isLoading } = useGetMoviesByNameQuery("dumbo");
  console.log(data);
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
      <View style={styles.searchResultsContainer}>
        <ResultsList results={testData} />
      </View>
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
    marginTop: "-3%",
    marginHorizontal: "3%",
    width: "94%",
  },
  searchResultsContainer: {
    margin: 10,
  },
});

const testData = [
  {
    Title: "Rickroll",
    Year: "1987",
    Poster:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/02/rickroll-hd-1280x720.jpg",
  },
  {
    Title: "Rickroll",
    Year: "1987",
    Poster:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/02/rickroll-hd-1280x720.jpg",
  },
  {
    Title: "Rickroll",
    Year: "1987",
    Poster:
      "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/02/rickroll-hd-1280x720.jpg",
  },
];
