import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";

export default SearchResultItem = React.memo(
  ({ item }) => {
    return (
      <ListItem
        containerStyle={styles.componentContainer}
        onPress={() => console.log(item)}
      >
        <Avatar source={{ uri: item["Poster"] }} />
        <ListItem.Content>
          <ListItem.Title>{item["Title"]}</ListItem.Title>
          <ListItem.Subtitle>{item["Year"]}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  },
  (prev, next) => {
    if (prev.item["Poster"] != next.item["Poster"]) return false;
    if (prev.item["Title"] != next.item["Title"]) return false;
    if (prev.item["Year"] != next.item["Year"]) return false;
    return true;
  }
);

const styles = StyleSheet.create({
  componentContainer: {
    borderRadius: 5,
    marginBottom: 5,
  },
});
