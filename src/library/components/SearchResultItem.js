import React from "react";
import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default SearchResultItem = React.memo(
  ({ item }) => {
    const navigation = useNavigation();
    return (
      <ListItem
        containerStyle={styles.componentContainer}
        onPress={() =>
          navigation.navigate("Result", {
            title: item["Title"],
            year: item["Year"],
            imdbID: item["imdbID"],
          })
        }
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
