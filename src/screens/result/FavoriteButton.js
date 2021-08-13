import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { useGetMovieByIMDbIDQuery } from "library/networking/omdbAPI";

export default FavoriteButton = ({ id }) => {
  const favorites = useSelector((state) => state.favorites.value);
  const active = Object.keys(favorites).includes(id);
  const dispatch = useDispatch();

  // It won't make 2 calls, because RTK Query is cacheing the result of this
  // API call, this happens as the page required to load this button loads.
  const { data, isError, isLoading } = useGetMovieByIMDbIDQuery(id);

  const saveFavorite = () => {
    if (isLoading) {
      setTimeout(saveFavorite, 50);
      return;
    }
    if (!isError) {
      dispatch(toggleFavorite(data));
    }
  };

  return (
    <Button
      icon={<Icon name="star" size={22} color="white" solid={active} />}
      onPress={saveFavorite}
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
