import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SearchResultsItem } from "library/components/SearchResultItem";

export default ResultsList = React.memo(
  ({ results }) => {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={results}
        renderItem={(item) => (
          <SearchResultsItem
            posterUrl={item.item["Poster"]}
            title={item.item["Title"]}
            year={item.item["Year"]}
          />
        )}
      />
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.results.length == nextProps.results.length) {
      for (let i = 0; i < prevProps.results.length; i++) {
        if (prevProps.results[i]["Title"] != nextProps.results[i]["Title"]) {
          return false;
        }
      }
      return true;
    } else return false;
  }
);

const styles = StyleSheet.create({});
