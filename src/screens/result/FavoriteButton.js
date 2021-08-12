import React from "react";
import { TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";

export default FavoriteButton = ({ id }) => {
  const favorites = useSelector((state) => state.favorites.value);
  const active = favorites.includes(id);

  const dispatch = useDispatch();
  return (
    <Button
      icon={<Icon name="star" size={22} color="white" solid={active} />}
      onPress={() => dispatch(toggleFavorite(id))}
      containerStyle={styles.componentContainer}
    />
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    marginRight: 8,
    borderRadius: 60,
  },
});
