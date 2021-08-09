import i18n from "i18n-js";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import ResultsList from "./ResultsList";
import { useGetMoviesByNameQuery } from "../../library/networking/omdbAPI";
import { setSearchQuery } from "../../redux/slices/searchSlice";
import R from "res/R";

import { useDispatch, useSelector } from "react-redux";
import ResultsListMessage from "./ResultsListMessage";

export default SearchScreen = () => {
  const [currentQuery, setCurrentQuery] = useState("");
  const [nonEmptySearch, setNonEmptySearch] = useState(false);

  const searchQuery = useSelector((state) => state.searchQuery.value);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetMoviesByNameQuery(searchQuery);

  useEffect(() => {
    if (searchQuery != "" && typeof searchQuery !== "undefined") {
      setNonEmptySearch(true);
    } else {
      setNonEmptySearch(false);
    }
  }, [searchQuery]);

  const SearchResults = !nonEmptySearch ? (
    <ResultsListMessage
      message={i18n.t("searchScreen.searchResults.emptySearch")}
    />
  ) : "Error" in data ? (
    <ResultsListMessage message={i18n.t("searchScreen.searchResults.error")} />
  ) : (
    <ResultsList results={data["Search"]} />
  );

  return (
    <View style={styles.screenContainer}>
      <SearchBar
        inputContainerStyle={{ backgroundColor: "white" }}
        leftIconContainerStyle={{ backgroundColor: "white" }}
        inputStyle={{ backgroundColor: "white" }}
        placeholder={i18n.t("searchScreen.searchField.hint")}
        containerStyle={styles.searchBar}
        value={currentQuery}
        onChangeText={(value) => setCurrentQuery(value)}
        onSubmitEditing={(event) => {
          dispatch(setSearchQuery(event.nativeEvent.text));
        }}
      />
      <Button
        title={i18n.t("searchScreen.searchButton.text")}
        containerStyle={styles.buttonContainer}
        onPress={() => {
          dispatch(setSearchQuery(currentQuery));
        }}
      />
      <View style={styles.searchResultsContainer}>{SearchResults}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  searchBar: {
    paddingTop: 10,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: R.colors.offwhite,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  buttonContainer: {
    marginTop: "1%",
    marginHorizontal: "7%",
    width: "86%",
  },
  searchResultsContainer: {
    margin: 10,
    flex: 1,
  },
});
