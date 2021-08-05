import React from "react";
import { ListItem, Avatar } from "react-native-elements";

export default SearchResultItem = React.memo(
  ({ posterUrl, title, year }) => {
    return (
      <ListItem>
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
