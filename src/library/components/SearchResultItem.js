import React from "react";
import { ListItem, Avatar } from "react-native-elements/dist/list/ListItem";

export default SearchResultItem = React.memo(({ posterUrl, title, year }) => {
  return (
    <ListItem>
      <Avatar source={posterUrl} />
      <ListItem.Title>{title}</ListItem.Title>
      <ListItem.Subtitle>{year}</ListItem.Subtitle>
    </ListItem>
  );
});
