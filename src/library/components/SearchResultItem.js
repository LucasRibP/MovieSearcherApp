import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";

export default SearchResultItem = React.memo(
  ({ posterUrl, title, year }) => {
    return (
      <ListItem containerStyle={styles.componentContainer}>
        <Avatar source={{ uri: posterUrl }} />
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{year}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  },
  (prev, next) => {
    if (prev.posterUrl != next.posterUrl) return false;
    if (prev.title != next.title) return false;
    if (prev.year != next.year) return false;
    return true;
  }
);

const styles = StyleSheet.create({
  componentContainer: {
    borderRadius: 5,
    marginBottom: 5,
  },
});
